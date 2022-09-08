import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function StationHeader() {
  const navigate = useNavigate();
  // function logOut(){
  //     localStorage.clear();
  //     navigate('/login');
  // }

  const logout = () => {
    sessionStorage.removeItem("fsUser");
    navigate("/fuel-station-login");
  };
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#">Fuel Orders</Nav.Link>
            <Nav.Link href="#">Allocations</Nav.Link>
            <Nav.Link href="#">Report</Nav.Link>
            <Nav.Link href="/fuel-station-settings">Settings</Nav.Link>

            <Nav.Link onClick={logout}>
              <BiLogOut />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StationHeader;
