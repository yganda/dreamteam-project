import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { MODAL_TYPES } from '../../constants';
import { Button } from '../Button/Button';
import { showModal } from '../../actions/modalActions';
import './MainHeader.scss';

const LogoTxt = 'Logo';
const JoinTxt = 'Join Us';
const ButtonTxt = 'Sign In';

const MainHeader = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showModal(MODAL_TYPES.SIGN_IN));

  return (
    <div className="mainHeader">
        <div className="mainHeader-container main-container">
            <div className="mainHeader-logo">
                <span className="mainHeader-logo--img" />
                <div className="mainHeader-logo--txt">{LogoTxt}</div>
            </div>
            <div className="mainHeader-logIn">
                <span className="mainHeader-logIn--txt">{JoinTxt}</span>
                <div className="mainHeader-logIn--btn">
                    <Button onClick={ handleClick } color="blue">{ButtonTxt}</Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default withRouter(MainHeader);
