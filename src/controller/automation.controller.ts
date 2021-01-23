import { Config, CreateResponse, GetResponse } from '@websiteshot/nodejs-client'
import { Request } from '../types/Request.type'
import { SecretAccessKey } from '../types/SecretAccessKey.type'
import { logger } from '../utils/Logger'
import { BucketController } from './bucket.controller'
import { DownloadController, DOWNLOAD_FOLDER } from './download.controller'
import { ScreenshotController } from './screenshot.controller'
const Path = require('path')

export class AutomationController {
  public static sleep(seconds: number): Promise<string> {
    logger.info(`Waiting ${seconds}sec until Screenshots have been processed`)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        logger.info(`Finished waiting...`)
        resolve(`done`)
      }, seconds * 1000)
    })
  }

  public static async run(request: Request, upload: boolean = true) {
    // setup
    logger.info(`Setup...`)
    const accessKey: SecretAccessKey = {
      id: process.env.AWS_ACCESS_KEY_ID,
      secret: process.env.AWS_ACCESS_KEY_SECRET,
    }
    const config: Config = {
      projectId: process.env.PROJECT,
      apikey: process.env.APIKEY,
    }

    // create screenshot
    logger.info(
      `Creating ${request.urls.length} Screenshot${
        request.urls.length > 1 ? 's' : ''
      }`,
    )
    const screenshotController = new ScreenshotController(config)
    const createResponse: CreateResponse = await screenshotController.create(
      request.urls,
      request.screenshotParameter,
    )
    logger.info(`Job Id: ${createResponse.jobId}`)

    // wait until screenshots are processed
    await AutomationController.sleep(60)

    // download screenshots
    logger.info(`Downloading Screenshots`)
    const getResponse: GetResponse = await screenshotController.get(
      createResponse.jobId,
    )
    const files: Array<{ url: string; name: string }> = getResponse.jobs.map(
      (job) => {
        return {
          url: job.data,
          name: `${job.url.name}.png`,
        }
      },
    )
    files.forEach((file) =>
      logger.info(`name: ${file.name}, data url: ${file.url}`),
    )
    const downloadPromises = files.map((file) =>
      DownloadController.download(file.url, file.name),
    )
    await Promise.all(downloadPromises)
    await AutomationController.sleep(5)

    if (upload) {
      // upload screenshots to cloud bucket
      logger.info(`Uploading Screenshots to Cloud Bucket`)
      const bucketController = new BucketController(
        accessKey,
        process.env.AWS_BUCKET,
      )
      const uploadPromises = files.map((file) =>
        bucketController.upload(
          Path.resolve(__dirname, `../..`, DOWNLOAD_FOLDER, file.name),
          file.name,
        ),
      )
      await Promise.all(uploadPromises)
    }
  }
}
