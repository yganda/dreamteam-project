import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './InputField.scss';

export const InputField = ({
  className,
  disabled,
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
    <div>
      <input
        onChange={ onInputChange }
        className={ classes }
        type={ inputType }
        value={ value }
        { ...props }
      />
    </div>
  )
};

InputField.INPUT_TYPES = {
  PASSWORD: 'password',
  TEXT: 'text',
};

InputField.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  inputType: PropTypes.oneOf([...Object.values(InputField.INPUT_TYPES)]),
  onInputChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};
