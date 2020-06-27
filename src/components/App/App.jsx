import React from 'react';
import './App.scss';
import { MainHeader } from '../MainHeader/MainHeader'; 

function App({children}) {
  return (
    <div className="App">
      <MainHeader/>
      <div className="childrenContainer">
          {children}
      </div>
    </div>
  );
}

export default App;
