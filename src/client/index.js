import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../shared/styles.css';

import App from '../shared/components/App';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);