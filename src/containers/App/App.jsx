import React from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { MainHeader } from '../../components/MainHeader';
import { Button } from '../../components/Button';
import { checkUser } from '../../actions/loginActions';

const App = ({children}) => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <MainHeader/>
      <div className="childrenContainer">
        {children}
        <Button onClick={ () => dispatch(checkUser())}>Test Action</Button>
      </div>
    </div>
  );
}

export default App;
