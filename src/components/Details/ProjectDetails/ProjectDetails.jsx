import React from "react";
import PropTypes from "prop-types";
import { InfoPanel } from "../../InfoPanel/InfoPanel";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import accountMultiple from "@iconify/icons-mdi/account-multiple";
import targetIcon from "@iconify/icons-mdi/target";
import accountTie from "@iconify/icons-mdi/account-tie";
import briefcaseIcon from "@iconify/icons-mdi/briefcase";
import calendarClock from "@iconify/icons-mdi/calendar-clock";
import "./ProjectDetails.scss";

const projectDetailsTitle = "Project details";
const customerLabel = "Customer";
const durationLabel = "Duration";
const domainLabel = "Domain";
const formedTeamLabel = "Formed team";
const coordinatorsLabel = "Coordinators";

export const ProjectDetails = ({ project }) => {
  const {
    customer,
    duration,
    domain,
    peopleApplied,
    teamCount,
    coordinators,
  } = project;

  const renderCoordinators = () => {
    return coordinators.map((person) => (
      <Link className="projectDetails-link">{person.fullName}</Link>
    ));
  };

  return (
    <InfoPanel className="projectDetails-wrapper">
      <div className="projectDetails">
        <div className="projectDetails-title">{projectDetailsTitle}</div>
        <div className="projectDetails-data">
          <Icon icon={briefcaseIcon} className="projectDetails-icon" />
          <span className="projectDetails-label">{customerLabel}</span>
          {customer}
        </div>
        <div className="projectDetails-data">
          <Icon icon={targetIcon} className="projectDetails-icon" />
          <span className="projectDetails-label">{domainLabel}</span>
          {domain}
        </div>
        <div className="projectDetails-data">
          <Icon icon={calendarClock} className="projectDetails-icon" />
          <span className="projectDetails-label">{durationLabel}</span>
          {duration}
        </div>
        <div className="projectDetails-data">
          <Icon icon={accountMultiple} className="projectDetails-icon" />
          <span className="projectDetails-label">{formedTeamLabel}</span>
          {`${peopleApplied} of ${teamCount}`}
        </div>
        <div className="projectDetails-data">
          <Icon icon={accountTie} className="projectDetails-icon" />
          <span className="projectDetails-label">{coordinatorsLabel}</span>
          <div className="projectDetails-label--coordinators">
            {renderCoordinators()}
          </div>
        </div>
      </div>
    </InfoPanel>
  );
};

ProjectDetails.propTypes = {
  position: PropTypes.shape({
    startDate: PropTypes.string,
    applicants: PropTypes.number,
    duration: PropTypes.string,
  }),
};
