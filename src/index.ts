import { AutomationController } from './controller/automation.controller'
import { Request } from './types/Request.type'

const BASE = `https://websiteshot.app`
const PROJECT = process.env.DOCS_PROJECT
const WIDTH = 1440
const HEIGHT = 900
const LOADING_TIME = 15000

const unguarded: Request = {
  urls: [
    {
      url: `${BASE}`,
      name: 'login',
    },
  ],
  screenshotParameter: {
    width: WIDTH,
    height: HEIGHT,
  },
}

const guarded: Request = {
  urls: [
    {
      url: `${BASE}/projects/${PROJECT}`,
      name: 'dashboard',
      loadingTime: LOADING_TIME,
    },
  ],
  screenshotParameter: {
    width: WIDTH,
    height: HEIGHT,
    loginParameter: {
      username: {
        username: process.env.DOCS_USER,
        elementId: '#email',
      },
      password: {
        password: process.env.DOCS_PASS,
        elementId: '#password',
      },
      loginButton: {
        elementId: '#btn-login',
      },
    },
  },
}

async function run() {
  await AutomationController.run(unguarded)
  await AutomationController.run(guarded)
}

run()
