import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import MainHeader from '../../components/MainHeader';
import ModalContainer from '../../components/ModalContainer';
import Home from '../Home';
import PositionSearch from '../PositionSearch';
import { Position } from '../Position/Position';

const App = () => {
  return (
    <div className="app">
      <MainHeader/>
      <div className="childrenContainer">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/positions" component={ PositionSearch } />
          <Route exact path="/positions/:positionId" component={ Position } />
        </Switch>
      </div>
      <ModalContainer />
    </div>
  );
}

export default App;
