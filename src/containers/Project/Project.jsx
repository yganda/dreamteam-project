import React from "react";
import { InfoPanel } from "../../components/InfoPanel";
import { Button } from "../../components/Button";
import { ProjectCard } from "../../components/Cards/ProjectCard";
import { ProjectDetails } from "../../components/Details/ProjectDetails";
import { SkillTag } from "../../components/SkillTag";
import { positions } from "../../mocks/positions";
import { projects } from "../../mocks/projects";
import { Icon } from "@iconify/react";
import accountCheck from "@iconify/icons-mdi/account-check";
import arrowLeft from '@iconify/icons-mdi/arrow-left';

import { Link } from "react-router-dom";

import "./Project.scss";

export const Project = () => {
  const position = {
    id: 111111,
    title: "iOS Developer",
    project: "Dream Team project name",
    projectId: 151515,
    customer: "Startup Jam Inc.",
    skills: ["Swift", "Xcode"],
    desiredSkills: ["Problem solving"],
    startDate: "July 6, 2020",
    duration: "13 weeks",
    applicants: 3,
    description: `We like to play as a team, especially when things get tricky. This is why we’re not only holding on to the awesome people already onboard, but also continue to welcome and search for new team members. Just like all of our other activities, the job interviews, onboardings and bootcamps continue as planned, we’ve simply switched to 100% remote work and moved all our interactions online. What’s more, everyone who joins Spartez these days can work from home until the COVID-19 lockdown is over. Subsequently, all new team members from outside the Gdańsk metropolitan area can take up to two months to relocate. 
      It’s business as usual at Spartez. Join us!`,
    courses: [{ name: "", link: "", icon: "linkedinIcon" }],
  };

  const project = {
    id: 151515,
    title: "Dream team project name",
    stage: "MVP",
    customer: "Startup Jam Inc.",
    skills: ["Java", ".NET", "CSS", "UX"],
    peopleApplied: 3,
    teamCount: 24,
    startDate: "July 6, 2020",
    duration: "13 weeks",
    description:
      "Development of a platform for the search for charity projects.",
    fullDescription: `We like to play as a team, especially when things get tricky. This is why we’re not only holding on to the awesome people already onboard, but also continue to welcome and search for new team members. Just like all of our other activities, the job interviews, onboardings and bootcamps continue as planned, we’ve simply switched to 100% remote work and moved all our interactions online. What’s more, everyone who joins Spartez these days can work from home until the COVID-19 lockdown is over. Subsequently, all new team members from outside the Gdańsk metropolitan area can take up to two months to relocate. 
      It’s business as usual at Spartez. Join us!`,
    domain: "Education",
    coordinators: [
      { id: 252525, fullName: "Klim Starykau" },
      { id: 234569, fullName: "Andrei Furs" },
    ],
    team: [111111, 666666, 888888, 101010],
  };

  const {
    id,
    title,
    skills,
    description,
    fullDescription,
    team
  } = project;

  const backTxt = `Back to ${position.title} position`;
  const projectDescrTxt = "Project description";
  const teamTxt = "Team";
  const similarProjectsTxt = "Similar projects";

  const renderSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div className="projectPage-skillItem">
          <SkillTag>{skill}</SkillTag>
        </div>
      );
    });
  };

  const renderTeam = () => {
    return team.map((position) => {
      const teamMember = positions.find((item) => item.id === position);
      return (
        <Link
          className="projectPage-teamCard"
          to={`/positions/${teamMember.id}`}
        >
          <div className="projectPage-teamCard--content">
            <div className="projectPage-teamCard--title">
              {teamMember.title}
              {teamMember.applicants && (
                <div className="projectPage-teamCard--icon">
                  <Icon icon={accountCheck} className="projectPage-icon" />
                  {teamMember.applicants}
                </div>
              )}
            </div>
            <div className="projectPage-teamCard--skills">
              {renderSkills(teamMember.skills)}
            </div>
          </div>
        </Link>
      );
    });
  };

  const renderProjectList = () => {
    const filteredPositionList = projects
      .map((project) => {
        const skillsCount = project.skills.filter(
          (skill) => skills.indexOf(skill) >= 0
        ).length;
        project.skillsCount = skillsCount;
        return project;
      })
      .filter((project) => project.id !== id && project.skillsCount > 0)
      .sort((a, b) => b.skillsCount - a.skillsCount)
      .slice(0, 4);

    console.log(filteredPositionList);

    return filteredPositionList.map((project) => (
      <Link
        className="projectPage-footer--positionItem"
        to={`/projects/${project.id}`}
        key={project.id}
      >
        <ProjectCard project={project} />
      </Link>
    ));
  };

  return (
    <div className="projectPage">
      <header>
        <Link className="projectPage-backLink">
          <Icon icon={arrowLeft} className="projectPage-backLink--icon" />
          {backTxt}
        </Link>
        <div className="projectPage-title">{title}</div>
        <div className="projectPage-description">{description}</div>
      </header>
      <main className="projectPage-main">
        <InfoPanel>
          <div className="projectPage-main--left">
            <div className="projectPage-main--title">{projectDescrTxt}</div>
            <div className="projectPage-main--projectDescription">
              {fullDescription}
            </div>
            <div className="projectPage-main--title">{teamTxt}</div>
            <div className="projectPage-main--teamWrapper">{renderTeam()}</div>
          </div>
        </InfoPanel>
        <div className="projectPage-main--right">
          <ProjectDetails project={project} isFullView />
          <div className="projectPage-main--indents">
            <Button color="blue">{`Apply for ${title} role`}</Button>
          </div>
        </div>
      </main>
      <footer className="projectPage-footer">
        {similarProjectsTxt}
        <div className="projectPage-footer--positionList">
          {renderProjectList()}
        </div>
      </footer>
    </div>
  );
};
