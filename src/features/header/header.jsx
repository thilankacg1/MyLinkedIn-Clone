import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOption from "./headerOption";
import {
  BusinessCenter,
  Chat,
  House,
  NotificationAdd,
} from "@mui/icons-material";
import { SupervisorAccount } from "@mui/icons-material";
import avatar from "../../app/assets/me.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../reducers/userSlice";
import { auth } from "../../firebase";

const Header = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <span className="header__logo">
          <LinkedInIcon />
        </span>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={House} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={NotificationAdd} title="Notifications" />
        <HeaderOption avatar={user.photoUrl} title="Me" onClick={logoutApp} isAvatar={true}/>
      </div>
    </div>
  );
};

export default Header;
