// From Signup.md Section - Add Imports
import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
// From Signup.md Section - Adding Code, do step 1 

// From Signup.md Section - Adding Code, do step 2 

// From Signup.md Section - Adding Code, do step 3 


// From Signup.md Section - Adding Code, do step 7 
  

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {/*From Signup.md Section - Adding Code, do step 8 */}
        
        {/*From Signup.md Section - Adding Code, do step 6 */}
        <Form >

        {/*From Signup.md Section - Adding Code, do step 4 */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email address" 

           />
          </Form.Group>

        {/*From Signup.md Section - Adding Code, do step 5 */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password"

           />
            
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};

export default Signup;