// From Home.md Section - Add Imports
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
// From ProtectedRoute.md Section - Adding Code, do step 1 
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {/*From ProtectedRoute.md Section - Adding Code, do step 2 */}
        {user.email}
      </div>
      <div className="d-grid gap-2">
        {/*From ProtectedRoute.md Section - Adding Code, do step 3 */}
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
