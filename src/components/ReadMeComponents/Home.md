# Home.js
All code referenced here are to be directly implemented within the `Home.js` unless stated otherwise.

## Steps for Home.js
This is the landing page whenever we are able to login via standard **Login, GoogleLogin or Sign Up** We will do so with this thanks to our `UserAuthContext.js` created a little while ago.

## Imports we'll be using

These will be the following imports we will make use of

    import  React  from  "react";
    import { Button } from  "react-bootstrap";
    import { useNavigate } from  "react-router";
    import { useUserAuth } from  "../context/UserAuthContext";

## Adding Code

1. Firstly we will need to call our `useUserAuth` to make use of it
	1.  `const { logOut, user } = useUserAuth();`
2. We'll also be making use of the `useNavigate` so we can redirect the user back to the login screen
	1. `const  navigate = useNavigate();` 
3.  In addition we want to display the users email address on the screen:
	1. `{user.email}` 
4. We would like to also create a button which would **Log the User Out** insert the `onClick={handleLogout}` with the Button property.

       <Button  variant="primary"  onClick={handleLogout}>
	       Log out
       </Button>

5. Upon clicking this button we will create a small function to handle the **handleLogout**:

Use:

    const  handleLogout = async () => {
        try {
	        await  logOut();
	        navigate("/");
	      } catch (error) {
	        console.log(error.message);
	      }
        };

5. The function above calls the function to attempt to log the user out from the current state, if successful, redirect the user back to the login page or else  displays and issue

## Where to go next?

Kindly redirect yourself to the next ReadMe file at src/security/ProtectedRoute.md