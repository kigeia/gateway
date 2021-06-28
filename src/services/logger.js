import { getLocalDate } from './utils'
require('dotenv').config()
const appRoot = require('app-root-path')
const winston = require('winston')
require('winston-daily-rotate-file');

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.align(),
  winston.format.printf(
    info => {
      const localDate = getLocalDate()
      return `${localDate} | ${info.level} | ${info.message}`
    }
  ),
)

const getLogPath = () => {
  let logPath = process.env.LOG_PATH
  if (typeof logPath === 'undefined' || logPath == null || logPath === '') {
    logPath = [appRoot.path, 'logs'].join('/')
  }
  return logPath
}

const config = {
  file: {
    level: 'info',
    filename: `${getLogPath()}/logs_gateway_app.log.%DATE%`,
    datePattern: 'YYYY-MM-DD',
    handleExceptions: true,
    handleRejections: true
  },
  console: {
    level: 'debug',
  }
}

const allLogsFileTransport = new winston.transports.DailyRotateFile(config.file)
const allLogsConsoleTransport = new winston.transports.Console(config.console)

const options = {
  format: logFormat,
  transports: [allLogsFileTransport, allLogsConsoleTransport],
  exitOnError: false,
}

export const logger = winston.createLogger(options)
