import React from "react";
import { Avatar } from "@mui/material";
import { Share } from "@mui/icons-material";
import defaultImg from "../../app/assets/default.png";
import ButtonSection from "./buttonSection";
import { ThumbUpSharp, Comment, Send } from "@mui/icons-material";

const Post = ({ title, name, description,photoUrl, postImage }) => {

  return (
    <div className="feed__post">
      <div className="feed__postHeader">
        <div className="feed__postHeaderTop">
          <div className="feed__postHeaderTop__icon">
            <Avatar src={photoUrl} className="feed__postHeaderTop__avatar" >
            {name[0].toUpperCase()}
            </Avatar>
          </div>
          <div className="feed__postHeaderTop__titleWrapper">
            <div className="feed__postHeaderTop__title">{name}</div>
            <div className="feed__postHeaderTop__subTitle">{description}</div>
            <div className="feed__postHeaderTop__time">
            </div>
          </div>
        </div>
        <div className="feed__postHeaderBottom">
          <p>{title}</p>
        </div>
      </div>
      <div className="feed__postContent">
        {postImage && (
            <img src={postImage} alt="post 1" />
        )}
        
      </div>
      <div className="feed__postFooter">
        <ButtonSection label="Like" Icon={ThumbUpSharp} color="#4a4a4a" />
        <ButtonSection label="Comment" Icon={Comment} color="#4a4a4a" />
        <ButtonSection label="Repost" Icon={Share} color="#4a4a4a" />
        <ButtonSection label="Send" Icon={Send} color="#4a4a4a" />
      </div>
    </div>
  );
};

export default Post;
