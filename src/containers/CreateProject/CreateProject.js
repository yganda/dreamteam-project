import React from "react";
import { ReactComponent as UnderConstructionImage } from "../../assets/underConstruction-icon.svg";
import { Link } from "react-router-dom";
import "./CreateProject.scss";

export const CreateProject = () => {
  return (
    <div className="createProject-wrapper">
      <div className="createProject">
        <div className="createProject-title">
          <Link to={"/dreamteam-project"}>
            <UnderConstructionImage />
          </Link>
        </div>
      </div>
    </div>
  );
};
