import React from "react";
import { Route, Switch } from "react-router-dom";

import { Position } from "../containers/Position/Position";
import { Project } from '../containers/Project/Project';

const routes = (
  <Switch>
    <Route exact path="/position/:positionId" component={Position} />
    <Route exact path="/project/:projectId" component={Project} />
  </Switch>
);

export default routes;
