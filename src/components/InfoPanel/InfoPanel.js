import React from "react";
import PropTypes from "prop-types";
import "./InfoPanel.scss";

export const InfoPanel = ({children}) => {
   return (
      <div className='infoPanel'>
          {children}
      </div>
   )
}

InfoPanel.propTypes = {
    children: PropTypes.node
  };
  