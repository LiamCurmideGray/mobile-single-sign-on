import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import ProtectedRoute from "./security/ProtectedRoute";
import Home from "./components/Home";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
