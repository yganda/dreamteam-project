import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import MainHeader from '../../components/MainHeader';
import Home from '../Home';
import ModalContainer from '../../components/ModalContainer';
import NotFoundPage from '../../containers/NotFoundPage';
import PositionSearch from '../PositionSearch';
import Position from '../Position';
import Project from '../Project';

const App = () => {
  return (
    <div className="app">
      <MainHeader/>
        <Switch>
          <Route exact path="/dreamteam-project" render={ props => <Home { ...props } /> } />
          <Route exact path="/positions" render={ props => <PositionSearch { ...props } /> } />
          <Route exact path="/positions/:positionId" render={ props => <Position { ...props } /> } />
          <Route exact path="/projects/:projectId" render={ props => <Project { ...props } /> } />
          <Route path="*" render={ props => <NotFoundPage { ...props } /> } />
        </Switch>
      <ModalContainer />
    </div>
  );
};

export default App;
