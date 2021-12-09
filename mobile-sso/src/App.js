import { useState } from "react";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import "./App.css";
import { auth } from "./firebase";

function App() {
  //UseState act as Session variables
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  //Checks whether the Auth state has changed and updates the user accordingly to keep them logged in
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      //Creates a User with the Email & Password
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      //Logs in user with a register email and password
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  //Logs Out User from the current state (i.e session)
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="App">
      <br/>
      <div>
        <h3> Register User </h3>
          <input type="email" placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value); }}/>
          <input type="password" placeholder="Password..." onChange={(event) => {setRegisterPassword(event.target.value); }} />
          <button onClick={register}> Create User</button>
      </div>
      <br/>
      <div>
        <h3> Login </h3>
          <input type="email" placeholder="Email..." onChange={(event) => {setLoginEmail(event.target.value); }}/>
          <input type="password" placeholder="Password..." onChange={(event) => {setLoginPassword(event.target.value); }}/>
        <button onClick={login}> Login</button>
      </div>

        {/* Remembers if the User is logged in the Session or not */}
        <h4> User Logged In: {user?.email} </h4>
        
      <button onClick={logout}> Sign Out </button>
    </div>
  );
}

export default App;