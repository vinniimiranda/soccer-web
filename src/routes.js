import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Crew from './pages/Crew';

export default function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/crew" exact component={Crew} />
      </Switch>
    </BrowserRouter>
  );
}
