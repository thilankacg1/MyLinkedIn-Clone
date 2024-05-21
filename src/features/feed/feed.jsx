import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import { Article, Chat, Photo } from "@mui/icons-material";
import Post from "./post";
import firebase from "firebase/compat/app";
import ButtonSection from "./buttonSection"

import "./feed.css";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../reducers/userSlice";

const Feed = () => {

    const user = useSelector(selectUser)
    
  const sortBySection = () => {
    return (
      <div className="feed__sortBySection">
        <div className="sortBy__divider"></div>
      </div>
    );
  };
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("feed").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("feed").add({
      name: user.displayName,
      description: user.email,
      title: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      photoUrl:user.photoUrl,
      postImage:""
    });
    setInput("");

  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Avatar src={user.photoUrl} className="feed__avatar" >
            {user.email[0].toUpperCase()}
          </Avatar>
          <form onSubmit={sendPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__buttonSection">
            <ButtonSection label= "Media"
            Icon={Photo} color="#378fe9"/>
            <ButtonSection label= "Contribute expertise"
            Icon={Chat} color="#c37d16"/>
            <ButtonSection label= "Write article"
            Icon={Article} color="#e06847"/>
        </div>
      </div>
      {sortBySection()}
      {posts.map(
        ({
          id,
          data: { title, name, timestamp, description, photoUrl, postImage },
        }) => (
          <Post
            key={id}
            title={title}
            name={name}
            description={description}
            timestamp={timestamp}
            photoUrl={photoUrl}
            postImage={postImage}
          />
        )
      )}

    </div>
  );
};

export default Feed;
