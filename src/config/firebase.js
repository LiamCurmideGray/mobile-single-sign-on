// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// From firebase.md Section - Adding Code, do step 1 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize React Application
const app = initializeApp(firebaseConfig);

//Import auth anytime we need to authenticate with Firebase
// From firebase.md Section - Adding Code, do step 2


export default app;
