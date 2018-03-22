import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Shows from '../../../client/components/shows/Shows';
import Template from '../../../client/HtmlTemplate';

import { Router } from 'express';
import HttpStatus from 'http-status-codes';
import * as showsService from '../../services/showsService';

const router = Router();

router.get('/', (req, res, next) => {
  showsService
    .getShows()
    .then(data => {
      const body = renderToString(<Shows shows={data} />);
      const title = 'Shows';
      res.send(
        Template({
          body,
          title
        })
      );
    })
    .catch(err => next(err));
});

export default router;
