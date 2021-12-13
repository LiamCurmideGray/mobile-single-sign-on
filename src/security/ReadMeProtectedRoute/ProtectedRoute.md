# ProtectedRoute.js
All code referenced here are to be directly implemented within the `ProtectedRoute.js` unless stated otherwise.

## Steps for ProtectedRoute.js
In this class we want to ensure that only **AUTHENTICATED** users are able to access our login page. We will do so with this thanks to our `UserAuthContext.js` created a little while ago.

## Imports we'll be using

These will be the following imports we will make use of:

    import  React  from  "react";
    import { Navigate } from  "react-router-dom";
    import { useUserAuth } from  "../context/UserAuthContext";

## Adding Code

 1. Firstly we will need to call our `useUserAuth` to make use of it
	 1. `const { user } = useUserAuth();`
 2.  We'll be also adding a console.log to view if the user is authenticated or not
	 1. `console.log("Check user in Private: ", user);`
 3. We will be creating an if statement to check if the user is null or not
 4. If user is not null, they'll be able to proceed to the home page, else they will be redirected back to the login screen.
 	1.   
	`if (!user) {
	return  <Navigate  to="/"  />;
	}
	return  children;`

## Where to go next?

**That's it! You've finished the coding lecture CONGRATULATIONS!** 
🥳🥳🥳
