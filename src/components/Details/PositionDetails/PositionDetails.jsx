import React from "react";
import PropTypes from "prop-types";
import { InfoPanel } from "../../InfoPanel/InfoPanel";
import calendarIcon from "@iconify/icons-mdi/calendar";
import accountCheck from '@iconify/icons-mdi/account-check';
import { Icon } from "@iconify/react";
import calendarClock from "@iconify/icons-mdi/calendar-clock";
import "./PositionDetails.scss";

const startDateLabel = "Start date";
const durationLabel = "Duration";
const applicantsLabel = "Applicants";
const posDetailsTitle = "Position details";

export const PositionDetails = ({ position }) => {
  const {
    startDate,
    duration,
    applicants
  } = position;


  return (
    <InfoPanel>
      <div className="positionDetails">
        <div className="positionDetails-title">{posDetailsTitle}</div>
        <div className="positionDetails-data">
          <Icon icon={calendarIcon} className="positionDetails-icon" />
          <span className="positionDetails-label">{startDateLabel}</span>
          {startDate}
        </div>
        <div className="positionDetails-data">
          <Icon icon={calendarClock} className="positionDetails-icon" />
          <span className="positionDetails-label">{durationLabel}</span>
          {duration}
        </div>
        <div className="positionDetails-data">
          <Icon icon={accountCheck} className="positionDetails-icon" />
          <span className="positionDetails-label">{applicantsLabel}</span>
          {applicants}
        </div>
      </div>
    </InfoPanel>
  );
};

PositionDetails.propTypes = {
  position: PropTypes.shape({
    startDate: PropTypes.string,
    applicants: PropTypes.number,
    duration: PropTypes.string,
  }),
};
