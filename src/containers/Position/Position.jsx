import React from "react";
import { Icon } from '@iconify/react';
import { InfoPanel } from "../../components/InfoPanel";
import { Button } from "../../components/Button";
import { PositionCard } from "../../components/Cards/PositionCard";
import { PositionDetails } from "../../components/Details/PositionDetails";
import { ProjectDetails } from "../../components/Details/ProjectDetails";
import { SkillTag } from "../../components/SkillTag";
import { positions } from "../../mocks/positions";
import { ReactComponent as CourseraLogo } from "../../assets/coursera-icon.svg";
import { Link } from "react-router-dom";
import arrowLeft from '@iconify/icons-mdi/arrow-left';

import "./Position.scss";

const backTxt = "Back to Positions";
const roleDescrTxt = "Role description";
const requiredSkillsTxt = "Required skills";
const desiredSkillsTxt = "Desired skills";
const coursesTxt = "Suggested courses";
const similarPositionsTxt = "Similar positions";
const LINK_ICON = {
  likedInIcon: "linkedIn",
  courseraIcon: "coursera",
};

export const Position = () => {
  const position = {
    id: 111111,
    title: "JAVA Developer",
    project: "Dream Team project name",
    projectId: 151515,
    customer: "Startup Jam Inc.",
    skills: ["Java", "Xcode"],
    desiredSkills: ["Problem solving"],
    startDate: "July 6, 2020",
    duration: "13 weeks",
    applicants: 3,
    description: `We like to play as a team, especially when things get tricky. This is why we’re not only holding on to the awesome people already onboard, but also continue to welcome and search for new team members. Just like all of our other activities, the job interviews, onboardings and bootcamps continue as planned, we’ve simply switched to 100% remote work and moved all our interactions online. What’s more, everyone who joins Spartez these days can work from home until the COVID-19 lockdown is over. Subsequently, all new team members from outside the Gdańsk metropolitan area can take up to two months to relocate. 
      It’s business as usual at Spartez. Join us!`,
    courses: [
      {
        name: "Java EE 8 Essential Training",
        link:
          "https://www.linkedin.com/learning/java-ee-8-essential-training?u=2113185",
        duration: "6h 42m",
        sourse: "linkedIn",
      },
      {
        name: "Java Programming",
        link:
          "https://www.coursera.org/specializations/java-programming?#about",
        duration: null,
        sourse: "coursera",
      },
      {
        name: "Java EE",
        link:
          "https://www.linkedin.com/learning/java-ee-concurrency-and-multithreading?u=2113185",
        duration: "4h 20m",
        sourse: "linkedIn",
      },
    ],
  };

  const currentProject = {
    id: 151515,
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

  const {
    id,
    title,
    project,
    skills,
    description,
    desiredSkills,
    courses,
  } = position;

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

  const renderSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div className="positionPage-skillItem">
          <SkillTag>{skill}</SkillTag>
        </div>
      );
    });
  };

  const renderCourseIcon = (icon) => {
    switch (icon) {
      case LINK_ICON.courseraIcon:
        return <CourseraLogo />;
      case LINK_ICON.likedInIcon:
        return <CourseraLogo />;
      default:
        return null;
    }
  };

  const renderCourses = () => {
    return courses.map((course) => {
      return (
        <Link className="positionPage-courseCard" to={course.link}>
          <div className="positionPage-courseCard--content">
            <div className="positionPage-courseCard--title">
              <div className="positionPage-courseCard--icon">
                {renderCourseIcon(course.sourse)}
              </div>
              {course.name}
            </div>
            <div className="positionPage-courseCard--duration">
              {course.duration}
            </div>
          </div>
        </Link>
      );
    });
  };

  const projectName = () => {
    return (
      <Link
        to={`/project/${position.projectId}`}
        className="positionPage-title--link"
      >
        {project}
      </Link>
    );
  };

  return (
    <div className="positionPage">
      <header>
        <Link className="positionPage-backLink">
        <Icon icon={arrowLeft} className="positionPage-backLink--icon" />
          {backTxt}
        </Link>
        <div className="positionPage-title">
          {`${title} for `} {projectName()}
        </div>
      </header>
      <main className="positionPage-main">
        <InfoPanel>
          <div className="positionPage-main--role">
            <div className="positionPage-main--title">{roleDescrTxt}</div>
            <div className="positionPage-main--roleDescription">
              {description}
            </div>
            <div className="positionPage-main--roleSkills">
              <div className="positionPage-main--required">
                <div className="positionPage-main--title">
                  {requiredSkillsTxt}
                </div>
                <div className="positionPage-skills">
                  {renderSkills(skills)}
                </div>
              </div>
              <div>
                <div className="positionPage-main--title">
                  {desiredSkillsTxt}
                </div>
                <div className="positionPage-skills">
                  {renderSkills(desiredSkills)}
                </div>
              </div>
            </div>
            <div className="positionPage-main--title">{coursesTxt}</div>
            <div className="positionPage-main--courses">{renderCourses()}</div>
          </div>
        </InfoPanel>
        <div className="positionPage-main--right">
          <PositionDetails position={position} />
          <div className="positionPage-main--indents">
            <ProjectDetails project={currentProject} />
          </div>
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
