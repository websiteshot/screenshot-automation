/* eslint-disable id-length */
import {
  BrowserFrameStyle,
  CropArea,
  ImageEffect,
  ImageEffectConfig,
} from '@websiteshot/nodejs-client/dist/types/ScreenshotParameter.type'
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
const EFFECTS: ImageEffectConfig[] = [
  {
    effect: ImageEffect.SHADOW,
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

const logofull: Request = {
  urls: [
    {
      url: `${BASE}/examples/logo`,
      name: 'logofull',
    },
  ],
  screenshotParameter: {
    width: 1000,
    height: 1000,
    tags: ['logo'],
  },
}

const logofullwl: Request = {
  urls: [
    {
      url: `${BASE}/examples/logo?size=l`,
      name: 'logofullwl',
    },
  ],
  screenshotParameter: {
    width: 1000,
    height: 1000,
    tags: ['logo'],
    effects: [
      {
        effect: ImageEffect.RESIZE,
        options: {
          width: 520,
        },
      },
    ],
  },
}

const logofullwm: Request = {
  urls: [
    {
      url: `${BASE}/examples/logo?size=m`,
      name: 'logofullwm',
    },
  ],
  screenshotParameter: {
    width: 1000,
    height: 1000,
    tags: ['logo'],
    effects: [
      {
        effect: ImageEffect.RESIZE,
        options: {
          width: 520,
        },
      },
    ],
  },
}

const logofullroundedmargin: Request = {
  urls: [
    {
      url: `${BASE}/examples/logo`,
      name: 'logofullroundedmargin',
    },
  ],
  screenshotParameter: {
    width: 1000,
    height: 1000,
    tags: ['logo'],
    effects: [
      {
        effect: ImageEffect.ROUNDCORNERS,
        options: {
          radius: 50,
        },
      },
      {
        effect: ImageEffect.MARGIN,
        options: {
          margin: 50,
        },
      },
    ],
  },
}

const logofullroundedmarginsmall: Request = {
  urls: [
    {
      url: `${BASE}/examples/logo`,
      name: 'logofullroundedmarginsmall',
    },
  ],
  screenshotParameter: {
    width: 1000,
    height: 1000,
    tags: ['logo'],
    effects: [
      {
        effect: ImageEffect.ROUNDCORNERS,
        options: {
          radius: 50,
        },
      },
      {
        effect: ImageEffect.MARGIN,
        options: {
          margin: 50,
        },
      },
      {
        effect: ImageEffect.RESIZE,
        options: {
          width: 520,
        },
      },
    ],
  },
}

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
    tags: ['unguarded'],
  },
}

const dashboard: Request = {
  urls: [
    {
      url: `${BASE}/examples/dashboard-card-image?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4NDk0OTA5MTU5OC1jMzFkYWFhYTRhYTk%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwIiwiY3JlZGl0IjoiTWl0Y2hlbGwgTHVhIChAbWl0Y2hlbDN1bykifSwiY29sb3IiOnsiciI6MTE1LCJnIjoxMiwiYiI6MTUzLCJhIjowLjd9fSwiY29udGVudCI6eyJ0aXRsZSI6IjwvPiIsInNpemUiOiJ4bCJ9LCJlZGl0IjpmYWxzZX0%3D`,
      name: 'dashboard-0',
    },
    {
      url: `${BASE}/examples/dashboard-card-image?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL3dlYnNpdGVzaG90LWRvY3MuczMuZXUtY2VudHJhbC0xLmFtYXpvbmF3cy5jb20vZ2l0aHViLWdpdGh1Yi1hY3Rpb24tbWFya2V0cGxhY2UucG5nIiwiY3JlZGl0IjoiIn0sImNvbG9yIjp7InIiOjU4LCJnIjoxMiwiYiI6MTYzLCJhIjowLjl9fSwiY29udGVudCI6eyJ0aXRsZSI6IkludGVncmF0ZSBpbiBHaXRodWIgQWN0aW9ucyIsInNpemUiOiJtIn0sImVkaXQiOmZhbHNlfQ%3D%3D`,
      name: 'dashboard-1',
    },
    {
      url: `${BASE}/examples/dashboard-card-image?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ4NTg1NjQwNzY0Mi03ZjliYTAyNjhiNTE%2FaXhsaWI9cmItMS4yLjEmaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwIiwiY3JlZGl0IjoiQXJ0ZW0gU2FwZWdpbiAoQHNhcGVnaW4pIn0sImNvbG9yIjp7InIiOjYzLCJnIjo1NSwiYiI6MjAxLCJhIjowLjd9fSwiY29udGVudCI6eyJ0aXRsZSI6IlNjcmlwdCBpdCEiLCJzaXplIjoibCJ9LCJlZGl0IjpmYWxzZX0%3D`,
      name: 'dashboard-2',
    },
    {
      url: `${BASE}/examples/dashboard-card-image?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMzQ3NDQzODgxMC1iMDRhMjQ4MDYzM2M%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwIiwiY3JlZGl0IjoiQ2hyaXN0aWFuIFdpZWRpZ2VyIChAY2hyaXN0aWFudykifSwiY29sb3IiOnsiciI6MjQ3LCJnIjozNywiYiI6MTMzLCJhIjowLjd9fSwiY29udGVudCI6eyJ0aXRsZSI6IlNvY2lhbCBTaGFyZSIsInNpemUiOiJsIn0sImVkaXQiOmZhbHNlfQ%3D%3D`,
      name: 'dashboard-3',
    },
    {
      url: `${BASE}/examples/dashboard-card-image?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ1NjMyNDUwNDQzOS0zNjdjZWUzYjNjMzI%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MTM1MCZxPTgwIiwiY3JlZGl0IjoiQ2F0aHJ5biBMYXZlcnkifSwiY29sb3IiOnsiciI6NjcsImciOjk3LCJiIjoyMzgsImEiOjAuOH19LCJjb250ZW50Ijp7InRpdGxlIjoiTG9nIHlvdXIgV2Vic2l0ZSBQcm9ncmVzcyIsInNpemUiOiJtIn0sImVkaXQiOmZhbHNlfQ%3D%3D`,
      name: 'dashboard-4',
    },
    {
      url: `${BASE}/examples/dashboard-card-image?data=eyJzdHlsZSI6eyJpbWFnZSI6eyJ1cmwiOiJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUzMTgzNzc2MzkwNC01ZDNjYjI2MzJlYTM%2FaXhpZD1NWHd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh3JTNEJml4bGliPXJiLTEuMi4xJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NjcxJnE9ODAiLCJjcmVkaXQiOiJQb3NzZXNzZWQgUGhvdG9ncmFwaHkgKEBwb3NzZXNzZWRwaG90b2dyYXBoeSkifSwiY29sb3IiOnsiciI6ODYsImciOjExLCJiIjoxNzMsImEiOjAuN319LCJjb250ZW50Ijp7InRpdGxlIjoiQXV0b21hdGUgeW91ciBEb2NzIiwic2l6ZSI6Im0ifSwiZWRpdCI6ZmFsc2V9`,
      name: 'dashboard-5',
    },
  ],
  screenshotParameter: {
    width: WIDTH,
    height: HEIGHT,
    tags: ['dashboard'],
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
      tags: ['example'],
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
      tags: ['example'],
      effects: [
        {
          effect: ImageEffect.SHADOW,
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
      tags: ['example'],
      effects: [
        {
          effect: ImageEffect.RESIZE,
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
      tags: ['example'],
      effects: [
        {
          effect: ImageEffect.BLUR,
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
        name: 'example-roundedcorners',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      tags: ['example'],
      effects: [
        {
          effect: ImageEffect.ROUNDCORNERS,
          options: {
            radius: 50,
          },
        },
      ],
    },
  },
  {
    urls: [
      {
        url: `${EXAMPLE_URL}`,
        name: 'example-margin',
      },
    ],
    screenshotParameter: {
      width: WIDTH,
      height: HEIGHT,
      tags: ['example'],
      effects: [
        {
          effect: ImageEffect.MARGIN,
          options: {
            radius: 20,
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
      tags: ['example'],
      area: CropArea.UPPER_HALF,
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
      tags: ['example'],
      style: BrowserFrameStyle.MAC_OS_SIMPLE_DARK,
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
      tags: ['example'],
      style: BrowserFrameStyle.MAC_OS_SIMPLE_DARK,
      effects: [
        {
          effect: ImageEffect.SHADOW,
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
    {
      url: `${BASE}/projects/${PROJECT}/templates`,
      name: 'app-templates',
      loadingTime: LOADING_TIME,
    },
  ],
  screenshotParameter: {
    width: WIDTH,
    height: HEIGHT,
    tags: ['guarded'],
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
    const logorequests: Request[] = [
      logofull,
      logofullroundedmargin,
      logofullroundedmarginsmall,
      logofullwl,
      logofullwm,
    ]
    const promises = logorequests.map((logorequest) =>
      AutomationController.run(logorequest),
    )
    await Promise.all(promises)
  } catch (error) {
    logger.error(`Failed to create login Screenshots`)
    logger.error(error)
  }

  try {
    await AutomationController.run(dashboard)
  } catch (error) {
    logger.error(`Failed to create dashboard Screenshots`)
    logger.error(error)
  }

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
