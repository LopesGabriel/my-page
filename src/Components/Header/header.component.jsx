import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './header.style.css';

const Header = () => {
    return(
        <Navbar className="header-root" bg="dark" expand="lg">
            <Navbar.Brand style={{color: 'white', fontWeight: 'bold'}} href="#home">Dev Lopes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link style={{color: 'white'}} href="#home">Home</Nav.Link>
                    <Nav.Link style={{color: 'white'}} href="#repositorio">Repositório</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;