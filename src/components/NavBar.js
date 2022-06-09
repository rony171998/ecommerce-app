import React from 'react';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import { Navbar,Nav, NavDropdown, Container } from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar style={{height: "content"}} bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <Nav.Link href="/">News</Nav.Link>
                        <Nav.Link href="#/favorites">Products</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Smart TV</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Smart phone</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Computers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Kichen</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
