import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Close, Visibility } from '@material-ui/icons';
import { closeModal } from '../../actions/modalActions';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import { ReactComponent as GoogleLogo } from '../../assets/google-icon.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook-icon.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/linkedin-icon.svg';
import { ReactComponent as EpamLogo } from '../../assets/epam-icon.svg';
import './SignInForm.scss';


const FORM_HEADER = 'Sign In';
const REMEMBER_ME = 'Remember me';
const FORGOT_PASSWORD = 'Forgot password?';
const REGISTER_NOW = 'Register now';
const SIGN_IN_BTN = 'Sign in';

const SignInForm = () => {
  const [isChecked, setIsChecked] = useState(true);
  const dispatch = useDispatch();
  const handleModalClose = () => dispatch(closeModal());
  const handleIsChecked = () => setIsChecked(!isChecked);
  const extraInputLabel = <Link to="#" className="signin-form__forgot-password">{FORGOT_PASSWORD}</Link>;

  return (
    <div className="signin-form">
      <h2>{FORM_HEADER}</h2>
      <section className="signin-form__options">
        <GoogleLogo />
        <LinkedInLogo />
        <FacebookLogo />
        <EpamLogo />
      </section>
      <form className="signin-form__fields">
        <InputField type="email" inputLabel="Email" />
        <InputField
          type="password"
          extraLabel={ extraInputLabel }
          inputLabel="Password"
          inputIcon={ <Visibility /> }
        />
        <div className="signin-form__remember-user">
          <Checkbox
            checked={isChecked}
            color="secondary"
            label={REMEMBER_ME}
            onChangeCallback={ handleIsChecked }
          />
        </div>
        <div className="signin-form__buttons">
          <Button className="signin-form__signin-btn" noBgr={ true }>{REGISTER_NOW}</Button>
          <Button className="signin-form__signin-btn">{SIGN_IN_BTN}</Button>
        </div>
      </form>
      <Close className="signin-form__close-icon" onClick={ handleModalClose } />
    </div>
  );
};

export default SignInForm;
