

# UserAuthContext.js
All code referenced here are to be directly implemented within the `src/context/UserAuthContext.js` unless stated otherwise.

## Steps for UserAuthContext.js
The purpose for this class is to house all our backend functions so that both the `Login.js & Signup.js`can import the respective functions needed to make use. To do this we'll be learning about the `{createContext, useContext} from react`. The `createContext` allows the class to be exportable to any class and we will be rendering the function through the use of `useContext`.

We will also be making us a lot of methods provided by ` from firebase/auth` which we be using as backend methods to interact with our firebase application. 

## Imports we'll be using

These will be the following imports we will make use of
  

    import { createContext, useContext, useEffect, useState } from  "react";
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from  "firebase/auth";
    import { auth } from  "../config/firebase";


## Adding Code

 1. To allow the `UseAuthContext.js` and let it be exportable we will first need to `createContext()` for it. This is done by the following:

Use:

    const  userAuthContext = createContext();

 
 2. Within our main method we will need to provide a return function to expose what methods & variables are allowed to be exposed. Due to initialising our `userAuthContext` we can use one of it features which includes the `.Provider` This is provided already:

:

    return (
    <userAuthContext.Provider
	    value = {{  }}
	    >
    {children}
    </userAuthContext.Provider>
    );

To explain, we are using the `<useAuthContext.Provider>` supplied by out context import to establish what methods will be exported through the `value={{  }}` (this will be updated a little later) then we are able to inject any `{children}` classes that may be of use for the following methods.

If you look back at `App.js` we had already established it as the following:

    <UserAuthContextProvider>
	    <Routes>
		    <Route path="/home" element={
			    <ProtectedRoute>
			    <Home  />
			    </ProtectedRoute>
		    }></Route>
		    <Route  path="/"  element={<Login  />}></Route>
		    <Route  path="/signup"  element={<SignUp  />}></Route>
		</Routes>
    </UserAuthContextProvider>

Simplifying this down, within  our `<UserAuthContextProvider>` we are allowing the following classes to make use of the methods we will be creating. 

    <UserAuthContextProvider>
	    <Home />
	    <Login />
	    <SignUp />
    </UserAuthContextProvider>

These classes are in fact our `{children} = Home.js , Login.js, Sign`

 3.  As noticed we have already exported `UserAuthContextProvider` to be allowed and used within the `App.js` however we want to ensure that the remainder classes are able to make use of our methods. So we can actually export the `useContext` in another method outside of our main method so that the other classes only need to import one small thing.

Use:

    export  function  useUserAuth() {
	    return useContext(userAuthContext);
    }

4. We want to make use of the `useStates()` consider these as **Session Variables** or in this case States that allows us to update the associated variable to whatever corresponding instance we want to make use of.

Use:

    const [user, setUser] = useState({});


## Backend Methods

We are able to create our methods that will be exported to the other classes as well start to make use of the `firebase/auth` methods we had installed as part of our dependencies.

 1. Creating the `logIn` function is done as so:

Use: 

    function  logIn(email, password) {
    return  signInWithEmailAndPassword(auth, email, password);
    }

We are making use of firebase auth methods such as `signInWithEmailAndPassword()` to authenticate the `email & password` provided and enable us to Login.

2. Creating the `signUp` method

Use:

    function  signUp(email, password) {
	    return  createUserWithEmailAndPassword(auth, email, password);
    }


We are making use of firebase auth methods such as `createUserWithEmailAndPassword()` to authenticate the `email & password` provided and enable us to SignUp and register a new account within our firebase.

3. Creating the `logOut` method

Use:

    function  logOut() {
	    return  signOut(auth);
    }

This allows us to log out the current user with the use of `signOut()` provided by firebase.

4. We want to also sign if via Google with out `googleSignIn` method

Use:

    function  googleSignIn() {
	    const  googleAuthProvider = new  GoogleAuthProvider();
	    return  signInWithPopup(auth, googleAuthProvider);
    }

This method allows us to make use of `googleAuthProvider` which we are retrieving from our `firebase/auth` we also would like to add a pop up screen to call the Google SignUp pop up using `signInWithPopup()`

5. Lastly we want to add the feature for `forgetPassword` with this method

Use:

    function  forgetPassword(email) {
	    return  sendPasswordResetEmail(auth, email);
    }

This method allows us to send a **valid email** for the user to change their password through firebase itself.

## State of Authentication

Throughout this section we have established the necessary methods which will make use within the other classes. However we have forgotten one small thing. Actually recording what the **current state of the User's Authentication** To do so we will be making use of our last `firebase/auth` method which is the `onAuthStateChanged`

However there's a small issue with this method as it is **constantly listening** whenever we render a new page, inputting within our forms which this is something we would like to avoid.

To counteract this issue we will be making use of `useEffect` feature provided by `react` itself this allows us to implement the `onAuthStateChanged` within it so that it is only executed the actual state changes via `logIn, signUp, logOut, googleSignIn` methods which these methods will be called within the submit button of each and every class we will be making.

 1. To implement this last method

Use:

    useEffect(() => {
	    const  unsubscribe = onAuthStateChanged(auth, (currentuser) => {
		    console.log("Auth", currentuser);
		    setUser(currentuser);
    });
      
    return () => {
	    unsubscribe();
	    };
    }, []);

Anytime the user's state has changed the `useEffect` automatically gets executed, thus we are creating a constant variable of `unsubscribed` which we are changing based if the user's state is changed at any point. The `[]` at the end of the code is to deter the `useEffect` from executing multiple times unless the user's state actually changes.

These happen anytime due to `logIn, signUp, logOut, googleSignIn` methods
 
2. Lastly we need to export all the methods and users we created to allow them to be used by the other classes by updating the `value` property

Use:

    return (
	    <userAuthContext.Provider
		    value={{ user, logIn, signUp, logOut, googleSignIn, forgetPassword }}
	    >
		    {children}
    </userAuthContext.Provider>
    );

## Where to go next?

Kindly redirect yourself to the next ReadMe file at 
[SignUp.md](https://github.com/LiamCurmideGray/mobile-single-sign-on/blob/main/src/readMeFolder/ReadMeComponents/Signup.md)
