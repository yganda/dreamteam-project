import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../containers/Home';
import PositionSearch from '../containers/PositionSearch';
import { Position } from '../containers/Position/Position';

const routes = (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/positions" component={ PositionSearch } />
    <Route exact path="/positions/:positionId" component={ Position } />
  </Switch>
);

export default routes;
