import React from "react";
import PropTypes from "prop-types";
import { InfoPanel } from "../../InfoPanel/InfoPanel";
import { SkillTag } from "../../SkillTag/SkillTag";
import "./ProjectCard.scss";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import EventIcon from "@material-ui/icons/Event";

export const ProjectCard = ({ project }) => {
  const {
    title,
    stage,
    skills,
    startDate,
    customer,
    appliedPersons,
    teamCount,
    description,
  } = project;

  const renderSkils = () => {
    return skills.map((skill) => {
      return (
        <div className="projectCard-skillItem">
          <SkillTag>{skill}</SkillTag>
        </div>
      );
    });
  };

  const renderTeam = () => {
    return (
      <div className="projectCard-footerItem">
        <PeopleAltIcon className="projectCard-footerItem--icon" />
        {`${appliedPersons} of ${teamCount}`}
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
        <div className="projectCard-skills">{renderSkils()}</div>
        <div className="projectCard-footer">
          {renderTeam()} {renderDate()}
        </div>
      </div>
    </InfoPanel>
  );
};

ProjectCard.propTypes = {
  position: PropTypes.object,
};
