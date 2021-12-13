
# Login.js
All code referenced here are to be directly implemented within the `src/components/Login.js` unless stated otherwise.

## Steps for Login.js
We will do so with this thanks to our `UserAuthContext.js` created a little while ago.

## Imports we'll be using

These will be the following imports we will make use of
  
    import  React, { useState } from  "react";
    import { Link, useNavigate } from  "react-router-dom";
    import { Form, Alert } from  "react-bootstrap";
    import { Button } from  "react-bootstrap";
    import  GoogleButton  from  "react-google-button";
    import { useUserAuth } from  "../context/UserAuthContext";

## Adding Code

 1. We want to make use of the `useStates()` so that we are able to retrieve the appropriate variables and even pass them back to the `UseAuthContext.js`

Use:

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
 2. We will need to call our `useUserAuth` to make use of it

Use:

    const { logIn, googleSignIn } = useUserAuth();


3. We'll also be making use of the `useNavigate` so we can redirect the user back to the login screen

Use:

     const navigate = useNavigate();


4. We want to ensure that when a value for `email` is inserted within the input field we want to save that value via the `onChange & event`  and save it appropriately for `setEmail`

Use:

    <Form.Group  className="mb-3"  controlId="formBasicEmail">
	    <Form.Control
		    type="email"
		    placeholder="Email Address"
		    onChange={(e) =>  setEmail(e.target.value)}
	    />
    </Form.Group>

5. We want to ensure that when a value for `password` is inserted within the input field we want to save that value via the `onChange & event`  and save it appropriately for `setPassword`

Use:

    <Form.Group  className="mb-3"  controlId="formBasicPassword">
	    <Form.Control
		    type="password"
		    placeholder="Password"
		    onChange={(e) =>  setPassword(e.target.value)}
	    />
    </Form.Group>

6. Next we want to call a function which will handle the Submit button that will catch the `email` & `password` that have been set by `setEmail & setPassword`

Use:

    <Form  onSubmit={handleSubmit}>

7. Upon clicking this button we will call a small function to handle the `handleSubmit` let's create it:

Use:

    const  handleSubmit = async (e) => {
	    e.preventDefault();
	    setError("");
	    try {
		    await  logIn(email, password);
		    navigate("/home");
	    } catch (err) {
		    setError(err.message);
	   }
    };
    
Upon this function being called, we want to ensure first that the `setError` is empty by default to clear it from any error messages. Then attempt a `try- & catch function` where we call the `logIn(email,password) from UserAuthContext` if successful the app will redirect us to the **Home Page** else it catches an error if anything goes wrong

8. Well be able to catch the error and display it on screen with this command

Use:

    {error && <Alert  variant="danger">{error}</Alert>}

9. We would like to make use of the `GoogleSignIn` to login with a valid gmail account which we can do the following:

Use:

    <div>
	    <GoogleButton
		    className="g-btn"
		    type="dark"
		    onClick={handleGoogleSignIn}
	    />
    </div>

10. Upon clicking this button we will call a small function to handle the `handleGoogleSignIn` let's create it:

Use:

    const  handleGoogleSignIn = async (e) => {
	    e.preventDefault();
	    setError("");
	    try {
		    await  googleSignIn();
		    navigate("/home");
	    } catch (error) {
		    setError(error.message);
	    }
    };

Upon this function being called, we want to ensure first that the `setError` is empty by default to clear it from any error messages. Then attempt a `try- & catch function` where we call the `googleSignIn from UserAuthContext` if successful the app will redirect us to the **Home Page** else it catches an error if anything goes wrong



## Where to go next?

Kindly redirect yourself to the next ReadMe file at src/readMeFolder/ReadMeComponents/Home.md