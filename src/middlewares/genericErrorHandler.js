import HttpStatus from 'http-status-codes';

import logger from '../utils/logger';

export default function genericErrorHandler(err, req, res, next) {
  logger.error(err);

  // HTTP errors
  if (err.isBoom) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      code: err.output.statusCode,
      message: err.output.payload.message || err.output.payload.error
    });
  }

  // Return INTERNAL_SERVER_ERROR for all other cases
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
  };

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
  });
}
