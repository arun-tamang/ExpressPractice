import fs from 'fs';
import winston from 'winston';
import 'winston-daily-rotate-file';

import appConfig from '../config/appConfig';

const { dir: logDir, level: logLevel } = appConfig.logging;

const tsFormat = () => new Date().toISOString();

// Create log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

// Create new winston logger instance.
const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
      level: 'info'
    }),
    new winston.transports.DailyRotateFile({
      filename: `${logDir}/-${logLevel}.log`,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      zippedArchive: true,
      maxDays: 30,
      prepend: true,
      level: logLevel
    })
  ]
});

export default logger;
