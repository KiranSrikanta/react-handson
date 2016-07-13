import {IndexRoute, Route} from 'react-router';
import App from './common/components/app';
import HomePage from './home/components/home-page';
import React from 'react';
import TodoListPage from './todo/components/todo-list-page';
import TodoPage from './todo/components/todo-page';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="todo" component={TodoPage}>
      <IndexRoute component={TodoListPage} />
    </Route>
  </Route>
);