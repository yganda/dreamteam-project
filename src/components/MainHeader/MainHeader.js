import React from "react";
import "./MainHeader.scss";
import { Button } from "../Button/Button";
const LogoTxt = "Logo";
const JoinTxt = "Join Us";
const ButtonTxt = "Sign In";

export const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div className="mainHeader-logo">
        <span className="mainHeader-logo--img" />
        <div className="mainHeader-logo--txt">{LogoTxt}</div>
      </div>
      <div className="mainHeader-logIn">
        <span className="mainHeader-logIn--txt">{JoinTxt}</span>
        <div className="mainHeader-logIn--btn" ><Button color="blue" >{ButtonTxt}</Button></div>
        
      </div>
    </div>
  );
};
