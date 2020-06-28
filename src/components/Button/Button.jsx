import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import clsx from 'clsx';

export const Button = ({
  children,
  className,
  disabled = false,
  color = Button.COLORS.BLUE,
  ...rest
}) => {
  const classes = clsx("button", `button--${color}`, className, {
    "button--disabled": disabled,
  });

  return (
    <button {...rest} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

Button.COLORS = {
  BLUE: "blue",
  DARK: "dark",
  GREEN: "green",
};

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.string,
  color: PropTypes.oneOf([...Object.values(Button.COLORS)]),
};
