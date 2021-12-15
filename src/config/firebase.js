// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// From firebase.md Section - Adding Code, do step 1 


// Your web app's Firebase configuration
const  firebaseConfig = {
  apiKey:  "YourApiKey"
  authDomain: "YourAuthDomain",
  projectId:  "YourProjectId",
  storageBucket:  "YourStorageBucket",
  messagingSenderId:  "YourMessagingSenderId",
  appId:  "YourAppId",
  };

// Initialize React Application
const app = initializeApp(firebaseConfig);

//Import auth anytime we need to authenticate with Firebase
// From firebase.md Section - Adding Code, do step 2


export default app;
