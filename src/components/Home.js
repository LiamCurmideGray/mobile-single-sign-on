// From Home.md Section - Add Imports
import React from "react";
import { Button } from "react-bootstrap";


const Home = () => {
// From ProtectedRoute.md Section - Adding Code, do step 1 

// From ProtectedRoute.md Section - Adding Code, do step 2 

// From ProtectedRoute.md Section - Adding Code, do step 5 
 
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {/*From ProtectedRoute.md Section - Adding Code, do step 3 */}

      </div>
      <div className="d-grid gap-2">
        {/*From ProtectedRoute.md Section - Adding Code, do step 4 */}
        <Button  variant="primary">
	       Log out
       </Button>
      </div>
    </>
  );
};

export default Home;
