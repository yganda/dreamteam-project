import React from 'react';
import './App.scss';
import { MainHeader } from '../../components/MainHeader';
import { withRouter } from 'react-router-dom';
// import { PUBLIC_ROUTES } from 'config/routes';

const App = ({children}) => {
  return (
    <div className="App">
      <MainHeader/>
      <div className="childrenContainer">
        {children}
      </div>
    </div>
  );
}

export default withRouter(App);
