import React from 'react';
import 'bootswatch/dist/quartz/bootstrap.min.css';
import { Navbar,Nav, NavDropdown, Container} from 'react-bootstrap';


const NavBar = () => {
    return (
        <Navbar style={{height: "content"}} bg="light" expand="lg">
            <Container >
                <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#/">Favorites</Nav.Link>
                        <Nav.Link href="#/login">Login</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Smart TV</NavDropdown.Item>
                            <NavDropdown.Item href="/">Smart phone</NavDropdown.Item>
                            <NavDropdown.Item href="/">Computers</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">Kichen</NavDropdown.Item>
                        </NavDropdown>
                      
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
