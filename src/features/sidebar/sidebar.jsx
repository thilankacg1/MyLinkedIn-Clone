import { Avatar } from "@mui/material";
import React from "react";
import "./sidebar.css";
import cover from "../../app/assets/cover.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../../reducers/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={cover} alt="" />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">1,000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,000</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems("programming")}
        {recentItems("frontendDevelopment")}
        {recentItems("angular")}
      </div>
    </div>
  );
};

export default Sidebar;
