import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import { Position } from '../containers/Position/Position';

const routes = (
  <Switch>
    <Route exact path="/" render={ props => <Home { ...props } /> } />
    <Route exact path="/Position/:positionId" render={ props => <Position { ...props } /> } />
  </Switch>
);

export default routes;
