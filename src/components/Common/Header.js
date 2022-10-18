import React from "react";
import { BiLogOut } from "react-icons/bi";
import { Navbar , Container , Nav , NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Header(){

    const navigate = useNavigate();
    // function logOut(){
    //     localStorage.clear();
    //     navigate('/login');
    // }
    return(
        
            <Navbar sticky = "top" bg="dark" expand="lg" variant = "dark">
                <Container fluid>
                    <Navbar.Brand href="/dashboard">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse   id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px'}}
                        navbarScroll
                    >   
                       
                       <Nav.Link href="#" >
                            Bookings
                        </Nav.Link>
                        <Nav.Link href="#" >
                            Report
                        </Nav.Link>
                        <Nav.Link href="/addcomplaint" >
                            Complaints
                        </Nav.Link>
                        <Nav.Link href="/customer-profile" >
                            Profile
                        </Nav.Link>

                        <Nav.Link onClick={() =>{
                            // logOut();
                            console.log("Hi");
                        }}  ><BiLogOut/></Nav.Link>
                      
                    </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
    )
}

export default Header;