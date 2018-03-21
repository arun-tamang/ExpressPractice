import fs from 'fs';
import winston from 'winston';
import 'winston-daily-rotate-file';
import appConfig from '../config/appConfig';

const { logDir, logLevel } = appConfig;

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
      prepend: true,
      level: logLevel,
      timestamp: tsFormat,
      datePattern: 'yyyy-MM-dd',
      filename: `${logDir}/-debug.log`
    })
  ]
});

export default logger;
