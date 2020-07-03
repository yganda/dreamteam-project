import React, { useState, useEffect } from "react";
import { uuid } from 'uuidv4';
import { InfoPanel } from "../../components/InfoPanel";
import { Button } from "../../components/Button";
import { ProjectCard } from "../../components/Cards/ProjectCard";
import { ProjectDetails } from "../../components/Details/ProjectDetails";
import { SkillTag } from "../../components/SkillTag";
import NotFoundPage from '../../containers/NotFoundPage';
import { positions } from "../../mocks/positions";
import { projects } from "../../mocks/projects";
import { Icon } from "@iconify/react";
import accountCheck from "@iconify/icons-mdi/account-check";
import arrowLeft from "@iconify/icons-mdi/arrow-left";
import checkIcon from "@iconify/icons-mdi/check";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { showModal } from "../../actions/modalActions";
import { MODAL_TYPES } from "../../constants";

import "./Project.scss";

const Project = (props) => {
  const project = projects.find(
    (item) => item.id === props.match.params.projectId
  );

  const [isApplied, setIsApplied] = useState();
  const dispatch = useDispatch();

  useEffect(
    () => {
      setIsApplied(false)
    },
    [project, props.user]
  );

  if (!project) return <NotFoundPage />;
  const { id, title, skills, description, fullDescription, team } = project;


  const handleClick = () =>
    props.user ? setIsApplied(true) : dispatch(showModal(MODAL_TYPES.SIGN_IN));

  const backTxt = `Back to previous page`;
  const projectDescrTxt = "Project description";
  const teamTxt = "Team";
  const similarProjectsTxt = "Similar projects";

  const buttonMsg = isApplied ? (
    <div className="projectPage-buttonMsg">
      <Icon icon={checkIcon} className="projectPage-buttonMsg--icon" />
      {"Succesfully applied"}
    </div>
  ) : (
    "Apply without position"
  );

  const renderSkills = (skills) => {
    return skills.map((skill) => {
      return (
        <div key={uuid()} className="projectPage-skillItem">
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
          key={uuid()}
          className="projectPage-teamCard"
          to={`/positions/${teamMember.id}`}
        >
          <div className="projectPage-teamCard--content">
            <div className="projectPage-teamCard--title">
              {teamMember.title}
              {teamMember.applicants > 0 && (
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
    <section className="projectPage-wrapper">
      <div className="projectPage">
        <header>
          <Link
            to="#"
            className="projectPage-backLink"
            onClick={props.history.goBack}
          >
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
              <div className="projectPage-main--teamWrapper">
                {renderTeam()}
              </div>
            </div>
          </InfoPanel>
          <div className="projectPage-main--right">
            <ProjectDetails project={project} isFullView />
            <div className="projectPage-main--indents">
              <Button
                color={isApplied ? "green" : "blue"}
                onClick={handleClick}
              >
                {buttonMsg}
              </Button>
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
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.userAccount.user,
});

export default connect(mapStateToProps, null)(Project);
