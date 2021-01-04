import { ScreenshotParameter, Url } from '@websiteshot/nodejs-client'

export interface Request {
  urls: Url[]
  screenshotParameter: ScreenshotParameter
}
