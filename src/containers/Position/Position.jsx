import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { InfoPanel } from "../../components/InfoPanel";
import { Button } from "../../components/Button";
import { PositionCard } from "../../components/Cards/PositionCard";
import { PositionDetails } from "../../components/Details/PositionDetails";
import { ProjectDetails } from "../../components/Details/ProjectDetails";
import { SkillTag } from "../../components/SkillTag";
import { positions } from "../../mocks/positions";
import { projects } from "../../mocks/projects";
import { courses } from "../../mocks/courses";
import { ReactComponent as CourseraLogo } from "../../assets/coursera-icon.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin-icon.svg";
import { Link } from "react-router-dom";
import arrowLeft from "@iconify/icons-mdi/arrow-left";
import checkIcon from "@iconify/icons-mdi/check";
import uuidv4 from "uuid/v4";

import { connect, useDispatch } from "react-redux";
import { showModal } from "../../actions/modalActions";
import { MODAL_TYPES } from "../../constants";

import "./Position.scss";

const backTxt = "Back to previous page";
const roleDescrTxt = "Role description";
const requiredSkillsTxt = "Required skills";
const desiredSkillsTxt = "Desired skills";
const coursesTxt = "Suggested courses";
const similarPositionsTxt = "Similar positions";
const LINK_ICON = {
  likedInIcon: "linkedIn",
  courseraIcon: "coursera",
};

const Position = (props) => {
  const position = positions.find(
    (item) => item.id === props.match.params.positionId
  );
  const { id, title, project, skills, description, desiredSkills } = position;

  const [isApplied, setIsApplied] = useState();

  useEffect(
    () => {
      setIsApplied(false)
    },
    [position]
  );

  const currentProject = projects.find((item) => item.id === project.id);

  const dispatch = useDispatch();

  const handleClick = () =>
    props.user ? setIsApplied(true) : dispatch(showModal(MODAL_TYPES.SIGN_IN));

  const suggestedCourses = courses.filter(
    (course) => position.courses.indexOf(course.id) >= 0
  );

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
        key={uuidv4()}
        className="positionPage-footer--positionItem"
        to={`/positions/${position.id}`}
      >
        <PositionCard position={position} />
      </Link>
    ));
  };

  const renderSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div key={uuidv4()} className="positionPage-skillItem">
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
        return <LinkedInLogo />;
      default:
        return null;
    }
  };

  const renderCourses = () => {
    return suggestedCourses.map((course) => {
      return (
        <a
          className="positionPage-courseCard"
          key={uuidv4()}
          href={course.link}
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
        >
          <div className="positionPage-courseCard--content">
            <div className="positionPage-courseCard--title">
              <div className="positionPage-courseCard--icon">
                {renderCourseIcon(course.sourse)}
              </div>
              {course.title}
            </div>
            <div className="positionPage-courseCard--duration">
              {course.duration}
            </div>
          </div>
        </a>
      );
    });
  };

  const projectName = () => {
    return (
      <Link
        to={`/projects/${position.project.id}`}
        className="positionPage-title--link"
      >
        {project.name}
      </Link>
    );
  };

  const renderDisaredSkills = () => {
    return desiredSkills.map((skill) => <li key={uuidv4()}>{skill}</li>);
  };

  const buttonMsg = isApplied ? (
    <div className="positionPage-buttonMsg">
      <Icon icon={checkIcon} className="positionPage-buttonMsg--icon" />
      {"Succesfully applied"}
    </div>
  ) : (
    `Apply for ${title} role`
  );

  return (
    <section className="positionPage-wrapper">
      <div className="positionPage">
        <header>
          <Link
            to="#"
            className="positionPage-backLink"
            onClick={props.history.goBack}
          >
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
                  <div className="positionPage-main--roleDescription">
                    {renderDisaredSkills()}
                  </div>
                </div>
              </div>
              <div className="positionPage-main--title">{coursesTxt}</div>
              <div className="positionPage-main--courses">
                {renderCourses()}
              </div>
            </div>
          </InfoPanel>
          <div className="positionPage-main--right">
            <PositionDetails position={position} />
            <div className="positionPage-main--indents">
              <ProjectDetails project={currentProject} />
            </div>
            <Button color={isApplied ? "green" : "blue"} onClick={handleClick}>
              {buttonMsg}
            </Button>
          </div>
        </main>
        <footer className="positionPage-footer">
          {similarPositionsTxt}
          <div className="positionPage-footer--positionList">
            {renderPositionList()}
          </div>
        </footer>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.userAccount.user,
});

export default connect(mapStateToProps, null)(Position);
