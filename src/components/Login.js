// From Login.md Section - Add Imports //Replace Current Imports
import React from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";

const Login = () => {
// From Login.md Section - Adding Code, do step 1 


// From Login.md Section - Adding Code, do step 2 


// From Login.md Section - Adding Code, do step 3 


// From Login.md Section - Adding Code, do step 7
  

// From Login.md Section - Adding Code, do step 10 
  

// From Login.md Section - Adding Code, do step 12 


  return (
    <>
      <div className="p-4 box">
        <h2 classname="mb-3">Firebase Auth Login</h2>

        {/*From Login.md Section - Adding Code, do step 8 */}


        {/*From Login.md Section - Adding Code, do step 6 */}
        {/* //Replace <Form> Section */}
        <Form>

        {/*From Login.md Section - Adding Code, do step 4 */}
        {/* //Replace <Form.Group> Section */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email Address"
            />
          </Form.Group>

        {/*From Login.md Section - Adding Code, do step 5 */}
        {/* //Replace <Form.Group> Section */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />

        {/*From Login.md Section - Adding Code, do step 9 */}
        {/* //Replace <div> Section */}
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
          />
        </div>

        
      </div>
      <div className="p-4 box mt-3 text-center">
        {/* From Login.md Section - Adding Code, do step 11 */}
      <Button className="mb-3" type="dark">
            Forgotten Password
          </Button>
          <br/>

        Don't have an account?<Link to="/signup"> to Sign up </Link>
      </div>
    </>
  );
};

export default Login;
