import React from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import { MainHeader } from '../../components/MainHeader';
import { Button } from '../../components/Button';
import { checkUser } from '../../actions/loginActions';
import { withRouter } from 'react-router-dom';

const App = ({children, history}) => {
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

export default withRouter(App);
