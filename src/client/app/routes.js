import {IndexRoute, Route} from 'react-router';
import App from './common/components/app';
import HomePage from './home/components/home-page';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);