import dotenv from 'dotenv';

// Initialize environment variables
dotenv.config();

export default {
  appName: process.env.APP_NAME,
  appVersion: process.env.APP_VERSION,
  appHost: process.env.APP_HOST || '127.0.0.1',
  appPort: process.env.APP_PORT || '3000',
  logging: {
    dir: process.env.LOGGING_DIR || 'logs',
    level: process.env.LOGGING_LEVEL || 'debug'
  }
};