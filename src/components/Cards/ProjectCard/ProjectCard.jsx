import React from "react";
import PropTypes from "prop-types";
import { InfoPanel } from "../../InfoPanel/InfoPanel";
import { SkillTag } from "../../SkillTag/SkillTag";
import "./ProjectCard.scss";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EventIcon from "@material-ui/icons/Event";
import uuidv4 from "uuid/v4";

export const ProjectCard = ({ project }) => {
  const {
    title,
    stage,
    skills,
    startDate,
    customer,
    peopleApplied,
    teamCount,
    description,
  } = project;

  const renderSkills = () => {
    return skills.map((skill) => {
      return (
        <div key={uuidv4()} className="projectCard-skillItem">
          <SkillTag>{skill}</SkillTag>
        </div>
      );
    });
  };

  const renderTeam = () => {
    return (
      <div className="projectCard-footerItem">
        <PeopleAltIcon className="projectCard-footerItem--icon" />
        {`${peopleApplied} of ${teamCount}`}
      </div>
    );
  };

  const renderDate = () => {
    return (
      <div className="projectCard-footerItem">
        <EventIcon className="projectCard-footerItem--icon" />
        {startDate}
      </div>
    );
  };

  return (
    <InfoPanel>
      <div className="projectCard">
        <div className="projectCard-title">{title}</div>
        <div className="projectCard-projectInfo">
          <div className="projectCard-projectInfo--stage">{stage}</div>
          {customer}
        </div>
        <div className="projectCard-description">{description}</div>
        <div className="projectCard-skills">{renderSkills()}</div>
        <div className="projectCard-footer">
          {renderTeam()} {renderDate()}
        </div>
      </div>
    </InfoPanel>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    stage: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    startDate: PropTypes.string,
    customer: PropTypes.string,
    peopleApplied: PropTypes.number,
    teamCount: PropTypes.number,
    description: PropTypes.string,
  }),
};
