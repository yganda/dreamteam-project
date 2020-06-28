import React from "react";
import { Route, Switch } from "react-router-dom";

import { Position } from "../containers/Position/Position";

const routes = (
  <Switch>
    <Route exact path="/Position/:positionId" component={Position} />
  </Switch>
);

export default routes;
