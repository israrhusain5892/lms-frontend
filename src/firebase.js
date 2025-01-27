/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtJlWQZzSMapkjEpF7c2JDTUSt7B4_6gY",
  authDomain: "datasite-de27e.firebaseapp.com",
  projectId: "datasite-de27e",
  storageBucket: "datasite-de27e.firebasestorage.app",
  messagingSenderId: "540566985581",
  appId: "1:540566985581:web:e95bead91246fb1662d864",
  measurementId: "G-V1PSGR6V6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
