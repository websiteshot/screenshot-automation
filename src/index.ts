/* eslint-disable id-length */
import { AutomationController } from './controller/automation.controller'
import { Request } from './types/Request.type'
import { logger } from './utils/Logger'

const GITHUB_BASE = `https://github.com/websiteshot`
const BASE = `https://console.websiteshot.app`
const EXAMPLE_URL = `https://console.websiteshot.app`
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
      url: `${BASE}/examples/social-share?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxOTY4MTM5Mzc4NC1kMTIwMjY3OTMzYmE%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwIiwiY3JlZGl0IjoiQmVuamFtaW4gVm9yb3MgKEB2b3Jvc2Jlbmlzb3ApIn0sImNvbG9yIjp7InIiOjExNSwiZyI6MTIsImIiOjE1MywiYSI6MC43fX0sImNvbnRlbnQiOnsidGl0bGUiOiJTY3JlZW5zaG90IGxpa2UgYSBQcm8iLCJhdXRob3IiOiJBZGFtIFVyYmFuIChAdXJiYW5pc2llcnVuZykiLCJ0YWdzIjpbInNjcmVlbnNob3RzIiwiYXV0b21hdGlvbiIsImF3ZXNvbWUiXSwidXJsIjoiaHR0cHM6Ly93ZWJzaXRlc2hvdC5hcHAifX0%3D`,
      name: 'examples-social-share-template-1',
    },
    {
      url: `${BASE}/examples/social-share?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5MzI0NjUwNzEzOS05MWU4ZmFkOTk3OGU%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwIiwiY3JlZGl0IjoiR2FycmV0dCBQYXJrZXIgKEBnYXJyZXR0cHN5c3RlbXMpIn0sImNvbG9yIjp7InIiOjc1LCJnIjoxMTIsImIiOjEzMywiYSI6MC43fX0sImNvbnRlbnQiOnsidGl0bGUiOiJTY3JlZW5zaG90IGxpa2UgYSBQcm8iLCJhdXRob3IiOiJBZGFtIFVyYmFuIChAdXJiYW5pc2llcnVuZykiLCJ0YWdzIjpbInNjcmVlbnNob3RzIiwiYXV0b21hdGlvbiIsImF3ZXNvbWUiXSwidXJsIjoiaHR0cHM6Ly93ZWJzaXRlc2hvdC5hcHAifX0%3D`,
      name: 'examples-social-share-template-2',
    },
    {
      url: `${BASE}/examples/social-share?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzNDE0MzA0NjA0My00NGFmMzQ2OTgzNmI%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NzAwJnE9ODAiLCJjcmVkaXQiOiJUaXJheWEgQWRhbSAoQHR0YWhfcGhvdG9zKSJ9LCJjb2xvciI6eyJyIjozNSwiZyI6MjEyLCJiIjoyMzMsImEiOjAuN319LCJjb250ZW50Ijp7InRpdGxlIjoiU2NyZWVuc2hvdCBsaWtlIGEgUHJvIiwiYXV0aG9yIjoiQWRhbSBVcmJhbiAoQHVyYmFuaXNpZXJ1bmcpIiwidGFncyI6WyJzY3JlZW5zaG90cyIsImF1dG9tYXRpb24iLCJhd2Vzb21lIl0sInVybCI6Imh0dHBzOi8vd2Vic2l0ZXNob3QuYXBwIn19`,
      name: 'examples-social-share-template-3',
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

const examples: Request[] = [
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-natural',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-shadow',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      effects: [
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
      ],
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-resize',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      effects: [
        {
          effect: 'resize',
          options: {
            width: 300,
          },
        },
      ],
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-blur',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      effects: [
        {
          effect: 'blur',
          options: {
            radius: 15,
          },
        },
      ],
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-upperhalf',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      area: 'upperhalf',
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-macos-simple-dark',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      style: 'macos-simple-dark',
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-combined',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      style: 'macos-simple-dark',
      effects: [
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
      ],
    },
  },
]

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

  try {
    const promises = examples.map((example) =>
      AutomationController.run(example),
    )
    await Promise.all(promises)
  } catch (error) {
    logger.error(`Failed to create example Screenshots`)
    logger.error(error)
  }
}

run()
