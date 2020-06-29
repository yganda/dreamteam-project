import React from 'react';
import PropTypes from 'prop-types';
import './InfoPanel.scss';
import clsx from 'clsx';

export const InfoPanel = ({children, className}) => {

  const classes = clsx("infoPanel", className); 
  
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

InfoPanel.propTypes = {
  children: PropTypes.node,
};
