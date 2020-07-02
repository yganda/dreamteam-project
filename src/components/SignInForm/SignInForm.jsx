import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Close, Visibility } from '@material-ui/icons';
import { closeModal } from '../../actions/modalActions';
import { InputField } from '../../components/InputField';
import { Button } from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import { ReactComponent as GoogleLogo } from '../../assets/google-icon.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook-icon.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/linkedin-icon.svg';
import { ReactComponent as EpamLogo } from '../../assets/epam-icon.svg';
import { signInUser } from '../../actions/signInActions';
import './SignInForm.scss';


const FORM_HEADER = 'Sign In';
const REMEMBER_ME = 'Remember me';
const FORGOT_PASSWORD = 'Forgot password?';
const REGISTER_NOW = 'Register now';
const SIGN_IN_BTN = 'Sign in';

const SignInForm = ({ user }) => {
  const [isChecked, setIsChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // <---  FAKE AUTH  --->
  // <---FOR DEMO ONLY--->
  const dispatch = useDispatch();
  const handleModalClose = () => dispatch(closeModal());
  useEffect(
    () => {
      if (user) handleModalClose()
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };
  const handleIsChecked = () => setIsChecked(!isChecked);
  const handleSignIn = (event) => {
    event.preventDefault();
    dispatch(signInUser(email, password));
  }
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const extraInputLabel = <Link to="#" className="signin-form__forgot-password">{FORGOT_PASSWORD}</Link>;
  const isBtnDisabled = !email || !password;

  const FormButtons = (
    <div className="signin-form__buttons">
      <Button
        className="signin-form__signin-btn register"
        noBgr={true}
      >
        {REGISTER_NOW}
      </Button>
      <Button
        className="signin-form__signin-btn"
        disabled={isBtnDisabled}
        onClick={handleSignIn}
      >
        {SIGN_IN_BTN}
      </Button>
    </div>
  );

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
        <InputField
          inputType="email"
          inputLabel="Email"
          name="email"
          onInputChange={ handleChange }
        />
        <InputField
          inputType={ showPassword ? 'text' : 'password' }
          extraLabel={ extraInputLabel }
          inputLabel="Password"
          inputIcon={ <Visibility onClick={ handleShowPassword } /> }
          name="password"
          onInputChange={ handleChange }
        />
        <div className="signin-form__remember-user">
          <Checkbox
            checked={isChecked}
            color="secondary"
            label={REMEMBER_ME}
            onChangeCallback={ handleIsChecked }
          />
        </div>
        { FormButtons }
      </form>
      <Close className="signin-form__close-icon" onClick={ handleModalClose } />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userAccount.user,
});

export default connect(mapStateToProps, null)(SignInForm);
