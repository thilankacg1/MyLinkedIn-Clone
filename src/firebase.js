// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_xZUsoBpT1O-PRbql0EbGnxHhbdUHO94",
    authDomain: "linkedin-clone-app-6817f.firebaseapp.com",
    projectId: "linkedin-clone-app-6817f",
    storageBucket: "linkedin-clone-app-6817f.appspot.com",
    messagingSenderId: "46084002900",
    appId: "1:46084002900:web:fec136fb87547613be49c1",
    measurementId: "G-705FWG6T2B"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};