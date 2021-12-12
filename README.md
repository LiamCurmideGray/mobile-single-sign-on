# Getting Starting with SSO App

## Project Creators

This project was created by Team B for Mobile - Device Programming SSO

Creators:

 - **Liam Curmi de Gray** - SSO Lead Coordinator
 - **Mark Xuereb** - Team B TUG Test Lead Developer
 - **Nina Musumeci** - Team B Director
 - **Stefano Schembri** - Team B Grip Strength Test Lead Developer

## Purpose for SSO Lecture
Throughout this lecture the main scope to teach will to teach you how to create the following:

 - **Login Screen**
 - **Sign Up Screen**
 - **Authorizing User**
 - **Redirect User to Homepage Once Logged In**
 - **Sign in with Google Provider**

## File Structure of Repo

 * |- mobile-single-sign-on
	* |- node_modules
	* |- src
	* |- components
		* |- ReadMeComponents
			* |- Home.md
			* |- Login.md
			* |- SignUp.md
		* |- Home.js
		* |- Login.js
		* |- Signup.js
	* |- config
		* |- ReadMeConfig
			* |- createFirebaseApp.md
				* |- firebase.md
	 			* |- firebase.js
	* |- context
		* |- ReadMeUserAuthContext
			* |- UserAuthContext.md
		* |- UserAuthContext.js
	 * |- security
		* |- ReadMeProtectedRoute
			* |- ProtectedRoute.md
		* |- ProtectedRoute.js
	* |- App.js
	* |- App.css
	* |- index.js
	* |- .env.local

## Dependencies

To make use for the full functionality of our React App, we will need to install a couple of dependencies. The host installed the dependencies using **npm**

The following dependencies needed are the following:

 - `npm install firebase`
 - `npm install react-bootstrap`
- `npm install react-router-dom`
- `npm install react-google-button`

## Repo React Version
At the time of writing the author's dependencies were set at the following:

    "dependencies": {
	    "@testing-library/jest-dom": "^5.16.1", 
	    "@testing-library/react": "^11.2.7",
	    "@testing-library/user-event": "^12.8.3",
	    "bootstrap": "^5.1.3",
	    "firebase": "^9.6.0",
	    "react": "^17.0.2",
	    "react-bootstrap": "^2.0.3",
	    "react-dom": "^17.0.2",
	    "react-google-button": "^0.7.2",
	    "react-router-dom": "^6.1.0",
	    "react-scripts": "4.0`3",
	    "web-vitals": "^1.1.2"
    }
 Kindly take note of these versions as if you work at a later version this repo might not work with updated dependencies.

## Where to go next?
Kindly redirect yourself to the next ReadMe file at src/config/ReadMeConfig/createFirebaseApp.md