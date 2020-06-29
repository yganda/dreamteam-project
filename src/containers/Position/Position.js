import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { InfoPanel } from "../../components/InfoPanel";
import { Button } from "../../components/Button";
import { PositionCard } from "../../components/Cards/PositionCard";
import { PositionDetails } from "../../components/Details/PositionDetails";
import { ProjectDetails } from "../../components/Details/ProjectDetails";
import { positions } from "../../mocks/positions";
import { Link } from "react-router-dom";

import "./Position.scss";

const backTxt = "Back to Positions";
const releDescrTxt = "Role description";
const requiredSkillsTxt = "Required skills";
const desiredSkillsTxt = "Desired skills";
const coursesTxt = "Suggested courses";
const similarPositionsTxt = "Similar positions";

export const Position = () => {
  const position = {
    id: 111111,
    title: "iOS Developer",
    project: "Dream Team project name",
    customer: "Startup Jam Inc.",
    skills: ["Swift", "Xcode"],
    startDate: "July 6, 2020",
    duration: "13 weeks",
    applicants: 3,
    description:
      "We like to play as a team, especially when things get tricky. This is why we’re not only holding on to the awesome people already onboard, but also continue to welcome and search for new team members. Just like all of our other activities, the job interviews, onboardings and bootcamps continue as planned, we’ve simply switched to 100% remote work and moved all our interactions online. What’s more, everyone who joins Spartez these days can work from home until the COVID-19 lockdown is over. Subsequently, all new team members from outside the Gdańsk metropolitan area can take up to two months to relocate. It’s business as usual at Spartez. Join us!",
  };

  const project = {
    title: "Dream team project name",
    stage: "MVP",
    customer: "Startup Jam Inc.",
    skills: ["Java", ".NET", "CSS", "UX"],
    peopleApplied: 3,
    teamCount: 24,
    startDate: "July 6, 2020",
    duration: "13 weeks",
    description: "Development of platform for the search for charity projects.",
    domain: "Education",
    coordinators: [
      { id: 252525, fullName: "Klim Starykau" },
      { id: 234569, fullName: "Andrei Furs" },
    ],
  };

  const { id, title, projectName, skills } = position;

  const renderPositionList = () => {
    const filteredPositionList = positions
      .map((position) => {
        const skillsCount = position.skills.filter(
          (skill) => skills.indexOf(skill) >= 0
        ).length;
        position.skillsCount = skillsCount;
        return position;
      })
      .filter((position) => position.id !== id && position.skillsCount > 0)
      .sort((a, b) => b.skillsCount - a.skillsCount)
      .slice(0, 4);

    return filteredPositionList.map((position) => (
      <Link
        className="positionPage-footer--positionItem"
        to={`/Position/${position.id}`}
      >
        <PositionCard position={position} key={position.id} />
      </Link>
    ));
  };

  return (
    <div className="positionPage">
      <header>
        <Link className="positionPage-backLink">
          <ArrowBackIcon className="positionPage-backLink--icon" />
          {backTxt}
        </Link>
        <div className="positionPage-title">{`${title} for ${projectName}`}</div>
      </header>
      <main className="positionPage-main">
        <InfoPanel>
          <div className="positionPage-main--role">Hello</div>
        </InfoPanel>
        <div className="positionPage-main--right">
          <PositionDetails position={position} />
          <ProjectDetails project={project} />
          <Button color="blue">{`Apply for ${title} role`}</Button>
        </div>
      </main>
      <footer className="positionPage-footer">
        {similarPositionsTxt}
        <div className="positionPage-footer--positionList">
          {renderPositionList()}
        </div>
      </footer>
    </div>
  );
};
