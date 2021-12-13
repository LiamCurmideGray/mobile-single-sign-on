
# Firebase.js
All code referenced here are to be directly implemented within the `src/config/firebase.js` unless stated otherwise.

## Steps for firebase.js

 1. Copy your Firebase SDK config settings, you can re-find this at the homepage of your project
	 1. Click the Settings button
	 2. Click Project Settings
	 3. You'll find it at the bottom of the page

 2. By default most of the script would be already there but we need to add a more things
 3.  Here's how the config should look like at your screens

    const  firebaseConfig = {
    apiKey:  "YourApiKey"
    authDomain: "YourAuthDomain",
    projectId:  "YourProjectId",
    storageBucket:  "YourStorageBucket",
    messagingSenderId:  "YourMessagingSenderId",
    appId:  "YourAppId",
    };

 4. Explain Author's `process.env.REACT_APP_FIREBASE_API_KEY`?
 5. In order to secure that only selected people are making use of this repo we need to safe guard it here's how
	 1. Create a new file at **src level** and call it **.env.local**
	 2. You should notice a **env.local** file at **src level** kindly rename this as **.env.local**
	 3. As we would like this file to be accessed at a global level and not be pushed back at the repo
 6.  Within this file you create the following:

    REACT_APP_FIREBASE_API_KEY=
    REACT_APP_FIREBASE_AUTH_DOMAIN=
    REACT_APP_FIREBASE_PROJECT_ID=
    REACT_APP_FIREBASE_STORAGE_BUCKET=
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
    REACT_APP_FIREBASE_APP_ID=`

8. After each `=` add accordingly what's found in your Firebase SDK without the inclusion of `" "`.

9. You can replace your `const firebaseConfig {}` with the following

 Use:   

    const  firebaseConfig = {
    apiKey:  process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain:  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:  process.env.REACT_APP_FIREBASE_APP_ID,
    };

10.  The `process.env.REACT....` allows us to call the variables we set within **.env.local**.
11.  We are able to start importing from `firebase/auth`


## Adding Code

 1. Add the **getAuth** at 

Use:

      import { getAuth } from  "firebase/auth";

This allows us to retrieve the getAuth function from firebase

 2. Next is to export our auth at

Use:

    export  const  auth = getAuth(app);
    
This allows us to export the variable `auth` to other classes.

## Where to go next?

Kindly redirect yourself to the next ReadMe file at src/readMeFolder/app.md
