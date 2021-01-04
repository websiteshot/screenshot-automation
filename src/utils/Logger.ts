import pino from 'pino'

// locally using pretty config: https://github.com/pinojs/pino-pretty
const localConfig = {
  name: 'websiteshot',
  level: 'debug',
  prettyPrint: { colorize: true },
}

const config = {
  name: 'websiteshot',
  level: 'debug',
}

export const logger =
  process.env.NODE_ENV === 'local' ? pino(localConfig) : pino(config)
