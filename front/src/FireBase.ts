import { initializeApp } from "firebase/app";
// import firebase from "firebase/app";
import { initializeAuth } from "firebase/auth";
// import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDG-vLM_eRNfTSn2QE-q4JJKHALkF6QlG8",
  authDomain: "gathering-eee66.firebaseapp.com",
  projectId: "gathering-eee66",
  storageBucket: "gathering-eee66.appspot.com",
  messagingSenderId: "887204151237",
  appId: "1:887204151237:web:fc3fc81b0247c20477d5ac"
};

// const storage_obj = firebase.storage();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {});
// export const storage = firebase.storage();