import React from 'react';
import { Router } from 'express';
import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"

import HtmlTemplate from '../../shared/HtmlTemplate';
import App from '../../shared/components/App';

const router = Router();

router.get('*', (req, res, next) => {
  const body = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );
  const title = 'Express-React App'

  res.send(HtmlTemplate({body, title}));

})

export default router;
