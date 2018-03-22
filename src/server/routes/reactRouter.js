import React from 'react';
import { Router } from 'express';
import ReactDOMServer from 'react-dom/server';

import AppComponent from '../../client/components/App';


var router = Router();

router.get('*', function (request, response) {
  var props = { title: 'Universal React' };
  var html = ReactDOMServer.renderToString(
    <AppComponent props />
  );
  response.send(html);
});

module.exports = router;