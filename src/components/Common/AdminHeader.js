import React from "react";
// import { BiLogOut } from "react-icons/bi";
import { Navbar, Container } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";
function AdminHeader() {
  //const navigate = useNavigate();
  // function logOut(){
  //     localStorage.clear();
  //     navigate('/login');
  // }

  /*  const logout = () => {
    sessionStorage.removeItem("fsUser");
    navigate("/fuel-station-login");
  }; */
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Home</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default AdminHeader;
