import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';
import clsx from 'clsx';

export const Button = ({
  children,
  className,
  disabled = false,
  color = Button.COLORS.BLUE,
  noBgr = false,
  ...rest
}) => {
  const classes = clsx("button", `button--${color}`, className, {
    "button--disabled": disabled,
    "button--no-bgr": noBgr,
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
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf([...Object.values(Button.COLORS)]),
  noBgr: PropTypes.bool,
};
