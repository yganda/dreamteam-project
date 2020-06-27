import React from 'react';
import PropTypes from 'prop-types';
import './SkillTag.scss';

export const SkillTag = ({ children }) => {
  return <div className="skillTag">{children}</div>;
};

SkillTag.propTypes = {
  children: PropTypes.string,
};
