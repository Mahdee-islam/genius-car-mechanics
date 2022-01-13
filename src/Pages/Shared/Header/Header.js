import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
  const { user, logOut, singInUsingGoogle } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
    
    <Navbar.Toggle />
    
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as = { HashLink } to="/home#home">Home</Nav.Link>
      <Nav.Link as = { HashLink } to="/home#services">Services</Nav.Link>
      <Nav.Link as = { HashLink } to ="/home#experts">Experts</Nav.Link>
        <Nav.Link as = { HashLink } onClick={singInUsingGoogle} to ="/login">Login</Nav.Link> 
      <Navbar.Text>
        Signed in as: <a href="#login"> {user?.displayName}  </a>
      </Navbar.Text> 
      { user?.email && <Button onClick={logOut} variant="warning text-danger ms-2" >Log out</Button> }
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;