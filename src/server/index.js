import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import logger from './utils/logger';
import config from './config/appConfig';

import notFoundHandler from './middlewares/notFoundHandler';
import genericErrorHandler from './middlewares/genericErrorHandler';

const app = express();

const { appName, appHost, appPort, appVersion } = config;


app.set('host', appHost);
app.set('port', appPort);

app.locals.title = appName;
app.locals.version = appVersion;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve everything in public directory as static content
app.use(express.static("public"));

// API Routes
app.use('/', routes);

// Error Middlewares
app.use(genericErrorHandler);
app.use(notFoundHandler);

app.listen(app.get('port'), app.get('host'), () => {
  logger.log('info', `Server started at http://${app.get('host')}:${app.get('port')}`);
});

export default app;
