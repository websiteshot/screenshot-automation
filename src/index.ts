/* eslint-disable id-length */
import { AutomationController } from './controller/automation.controller'
import { Request } from './types/Request.type'
import { logger } from './utils/Logger'

const GITHUB_BASE = `https://github.com/websiteshot`
const BASE = `https://websiteshot.app`
const PROJECT = process.env.DOCS_PROJECT
const WIDTH = 1440
const HEIGHT = 900
const LOADING_TIME = 15000
const EFFECTS = [
  {
    effect: 'shadow',
    options: {
      color: {
        r: 16,
        g: 110,
        b: 208,
        a: 1,
      },
    },
  },
]

const unguarded: Request = {
  urls: [
    {
      url: `${BASE}`,
      name: 'app-login',
    },
    {
      url: `${GITHUB_BASE}/nodejs-client#readme`,
      name: 'github-nodejs-client',
    },
    {
      url: `${GITHUB_BASE}/simple-script#readme`,
      name: 'github-simple-script',
    },
    {
      url: `${GITHUB_BASE}/github-action#readme`,
      name: 'github-github-action',
    },
    {
      url: `https://github.com/marketplace/actions/websiteshot`,
      name: 'github-github-action-marketplace',
    },
    {
      url: `${GITHUB_BASE}/screenshot-automation#readme`,
      name: 'github-screenshot-automation',
    },
  ],
  screenshotParameter: {
    width: WIDTH,
    height: HEIGHT,
    effects: EFFECTS,
  },
}

const guarded: Request = {
  urls: [
    {
      url: `${BASE}/projects/${PROJECT}`,
      name: 'app-dashboard',
      loadingTime: LOADING_TIME,
    },
    {
      url: `${BASE}/projects/${PROJECT}/usage`,
      name: 'app-usage',
      loadingTime: LOADING_TIME,
    },
    {
      url: `${BASE}/projects/${PROJECT}/create`,
      name: 'app-create',
      loadingTime: LOADING_TIME,
    },
    {
      url: `${BASE}/projects/${PROJECT}/members`,
      name: 'app-members',
      loadingTime: LOADING_TIME,
    },
    {
      url: `${BASE}/projects/${PROJECT}/apikeys`,
      name: 'app-apikeys',
      loadingTime: LOADING_TIME,
    },
  ],
  screenshotParameter: {
    width: WIDTH,
    height: HEIGHT,
    effects: EFFECTS,
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
  try {
    await AutomationController.run(unguarded)
  } catch (error) {
    logger.error(`Failed to create unguarded Screenshots`)
    logger.error(error)
  }

  try {
    await AutomationController.run(guarded)
  } catch (error) {
    logger.error(`Failed to create guarded Screenshots`)
    logger.error(error)
  }
}

run()
