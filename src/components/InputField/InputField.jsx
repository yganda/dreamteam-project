import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InputField.scss';

export const InputField = ({
  className,
  disabled,
  inputLabel,
  inputType = InputField.INPUT_TYPES.TEXT,
  onInputChange,
  value,
  ...props
}) => {
  const classes = clsx(
    "input-field", className, {
    "input-field--disabled": disabled,
  });

  return (
    <div className={ classes }>
      <label>{ inputLabel }</label>
      <input
        onChange={ onInputChange }
        type={ inputType }
        value={ value }
        { ...props }
      />
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
  inputLabel: PropTypes.string,
  inputType: PropTypes.oneOf([...Object.values(InputField.INPUT_TYPES)]),
  onInputChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
