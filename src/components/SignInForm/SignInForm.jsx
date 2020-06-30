import React from 'react';
import { useDispatch } from 'react-redux';
import { Close, Facebook, LinkedIn } from '@material-ui/icons';
import { closeModal } from '../../actions/modalActions';
import { InputField } from '../../components/InputField';
import './SignInForm.scss';

const FORM_HEADER = 'Sign In';
const REMEMBER_ME = 'Remember me'

const SignInForm = () => {
  const dispatch = useDispatch();
  const handleModalClose = () => dispatch(closeModal());

  return (
    <div className="signin-form">
      <h2>{FORM_HEADER}</h2>
      <section className="signin-form__options">
        <LinkedIn />
        <Facebook />
      </section>
      <form className="signin-form__fields">
        <InputField type="email" inputLabel="Email" />
        <InputField type="password" inputLabel="Password" />
      </form>
      <p className="signin-form__remember-user">{REMEMBER_ME}</p>
      <Close className="signin-form__close-icon" onClick={ handleModalClose } />
    </div>
  );
};

export default SignInForm;
