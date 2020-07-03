import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Person, Notifications } from "@material-ui/icons";
import logout from "@iconify/icons-mdi/logout";
import clsx from "clsx";
import { MODAL_TYPES } from "../../constants";
import { signOutUser } from "../../actions/signInActions";
import { Button } from "../Button/Button";
import DropDownMenu from "../DropDownMenu";
import { showModal } from "../../actions/modalActions";
import { ReactComponent as MainLogo } from "../../assets/logo-icon.svg";
import { Link } from "react-router-dom";
import "./MainHeader.scss";

const JoinTxt = "Join Us";
const ButtonTxt = "Sign In";
const userName = "Klim Starykau"; // mock

const MainHeader = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserSignedIn, setUserSignedIn] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(showModal(MODAL_TYPES.SIGN_IN));
  const handleOpenMenu = () => setIsOpen(!isOpen);
  const handleSignOut = () => {
    dispatch(signOutUser());
    setIsOpen(!isOpen);
  };

  useEffect(
    () => {
      if (user) {
        setUserSignedIn(!isUserSignedIn);
      } else {
        setUserSignedIn(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user]
  );

  const signInToggles = (
    <>
      <span className="mainHeader__sign-in--txt">{JoinTxt}</span>
      <div className="mainHeader__sign-in--btn">
        <Button onClick={handleClick} color="blue">
          {ButtonTxt}
        </Button>
      </div>
    </>
  );

  const userMenuClasses = clsx("mainHeader__sign-in--menu-container", {
    opened: isOpen,
  });
  const listItemCallback = { index: 1, callback: handleSignOut };
  const menuOptions = [
    <>
      <Person />
      <span>My profile</span>
    </>,
    <>
      <Icon icon={logout} width="24px" />
      <span>Log Out</span>
    </>,
  ];
  const userAccountMenu = (
    <>
      <Notifications className="mainHeader__sign-in--notification" />
      <div className={userMenuClasses}>
        <p className="mainHeader__sign-in--user-menu">{userName}</p>
        <DropDownMenu
          listClassName={"mainHeader__sign-in--menu-list"}
          listItemCallback={listItemCallback}
          opened={isOpen}
          onOpenMenuClick={handleOpenMenu}
          options={menuOptions}
        />
      </div>
    </>
  );

  const userBar = isUserSignedIn ? userAccountMenu : signInToggles;

  return (
    <div className="mainHeader">
      <div className="mainHeader-container main-container">
        <div className="mainHeader-logo">
          <Link to={"/dreamteam-project"}>
            <MainLogo />
          </Link>
        </div>
        <div className="mainHeader__sign-in">{userBar}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userAccount.user,
});

const connectedComponent = connect(mapStateToProps, null)(MainHeader);
export default withRouter(connectedComponent);
