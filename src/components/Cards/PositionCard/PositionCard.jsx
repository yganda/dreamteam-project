import React from 'react';
import PropTypes from 'prop-types';
import { InfoPanel } from '../../InfoPanel/InfoPanel';
import { SkillTag } from '../../SkillTag/SkillTag';
import './PositionCard.scss';
import EventIcon from '@material-ui/icons/Event';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';

const startDateLabel = 'Start date';
const customerLabel = 'Customer';

export const PositionCard = ({ position }) => {
  const { title, project, skills, startDate, customer } = position;

  const renderSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div className="positionCard-skillItem">
          <SkillTag>{skill}</SkillTag>
        </div>
      );
    });
  };

  const renderDate = (startDate) => {
    return (
      <>
        <EventIcon className="positionCard-icon" />
        <span className="positionCard-label">{startDateLabel}</span>
        {startDate}
      </>
    );
  };

  const renderCustomer = (customer) => {
    return (
      <>
        <WorkRoundedIcon className="positionCard-icon" />
        <span className="positionCard-label">{customerLabel}</span>
        {customer}
      </>
    );
  };

  return (
    <InfoPanel>
      <div className="positionCard">
        <div className="positionCard-title">{title}</div>
        <div className="positionCard-project">{project}</div>
        <div className="positionCard-skills">{renderSkills(skills)}</div>
        <div className="positionCard-date">{renderDate(startDate)}</div>
        <div className="positionCard-customer">{renderCustomer(customer)}</div>
      </div>
    </InfoPanel>
  );
};

PositionCard.propTypes = {
  position: PropTypes.shape({
    title: PropTypes.string,
    project: PropTypes.string,
    customer: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    startDate: PropTypes.string,
    duration: PropTypes.string,
    applicants: PropTypes.number
  }),
};
