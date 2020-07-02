import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InputField.scss';

export const InputField = ({
  className,
  disabled,
  extraLabel,
  inputIcon,
  inputLabel,
  inputType = InputField.INPUT_TYPES.TEXT,
  name,
  onInputChange,
  value,
}) => {
  const classes = clsx(
    'input-field', className, {
    'input-field--disabled': disabled,
    'input-field--icon-padding': !!inputIcon,
  });

  return (
    <div className={ classes }>
      <div className="input-field__labels">
        <label>{ inputLabel }</label>
        { extraLabel ? <div className="input-field__extra-label">{ extraLabel }</div> : null }
      </div>
      <div className="input-field__container">
        <input
          onChange={ onInputChange }
          type={ inputType }
          value={ value }
          name={ name }
        />
        { inputIcon ? <div className="input-field__icon">{ inputIcon }</div> : null }
      </div>
    </div>
  )
};

InputField.INPUT_TYPES = {
  EMAIL: 'email',
  PASSWORD: 'password',
  TEXT: 'text',
};

InputField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  extraLabel:  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  inputIcon: PropTypes.node,
  inputLabel: PropTypes.string,
  inputType: PropTypes.oneOf([...Object.values(InputField.INPUT_TYPES)]),
  onInputChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
