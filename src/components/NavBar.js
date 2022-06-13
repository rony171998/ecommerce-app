import React from 'react';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import { Navbar,Nav, NavDropdown, Container, Card} from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/">Smart-Mark</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#/favorites">Favorites</Nav.Link>
                        
                        <NavDropdown title="Products" id="basic-nav-dropdown" >
                            <NavDropdown.Item href="/">Smart TV</NavDropdown.Item>
                            <NavDropdown.Item href="/">Smart phone</NavDropdown.Item>
                            <NavDropdown.Item href="/">Computers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Kichen</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link style={{textAlign:"right"}} href="#/login">
                            <Card.Img style={{width :"25px"}} src='https://cdn-icons-png.flaticon.com/512/545/545837.png'></Card.Img>
                        </Nav.Link>

                        <NavDropdown title="User" id="basic-nav-dropdown" >
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/login">Login</NavDropdown.Item>
                            <NavDropdown.Item href="#/signin">Sign Up</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link style={{textAlign:"right"}} href="/">
                            <Card.Img style={{width :"25px"}} src='https://cdn-icons-png.flaticon.com/512/2127/2127209.png'></Card.Img>
                        </Nav.Link>

                        <Nav.Link style={{textAlign:"right"}} href="#/purchases">
                            <Card.Img style={{width :"25px"}} src='https://cdn-icons-png.flaticon.com/512/6948/6948348.png'></Card.Img>
                        </Nav.Link>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
