import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import MainHeader from '../../components/MainHeader';
import ModalContainer from '../../components/ModalContainer';
import Home from '../Home';
import PositionSearch from '../PositionSearch';
import Position from '../Position';
import { Project } from '../Project/Project';

const App = () => {
  return (
    <div className="app">
      <MainHeader/>
        <Switch>
          <Route exact path="/" render={ props => <Home { ...props } /> } />
          <Route exact path="/positions" render={ props => <PositionSearch { ...props } /> } />
          <Route exact path="/positions/:positionId" render={ props => <Position { ...props } /> } />
          <Route exact path="/projects/:projectId" render={ props => <Project { ...props } /> } />
        </Switch>
      <ModalContainer />
    </div>
  );
};

export default App;
