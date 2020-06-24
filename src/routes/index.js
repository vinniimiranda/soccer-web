import React from 'react';
import Route from './Route';
import { Switch } from 'react-router';
import Leagues from '../pages/Leagues';
import Teams from '../pages/Teams';


export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Leagues} />
      <Route path='/teams' exact component={Teams} />

    </Switch>
  );
}
