import React, { useEffect } from "react";
import "./App.css";
import Header from "./features/header/header";
import Sidebar from "./features/sidebar/sidebar";
import Feed from "./features/feed/feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./reducers/userSlice";
import Login from "./features/login/login";
import { auth } from "./firebase";
import Widget from "./features/widget/widget";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
