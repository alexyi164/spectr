import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Media from 'react-bootstrap/Media';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Navigation = ({ }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <img
          src="/spectrLogo.png"
          alt="logo"
          width="30"
          height="30"
          className="d-inline-block align-top "
        /> {' '}
        SPECTR
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Our Mission</Nav.Link>
        <Nav.Link href="#pricing">Premium</Nav.Link>
      </Nav>
      <Nav className="mr-sm-3">
        <DropdownButton
          variant="info"
          id="dropdown-basic-button"
          title={<img src="/profile.jpg" width={30} height={30}/>}
          drop={'left'}
        >
          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Saved Articles</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </DropdownButton>
      </Nav>
    </Navbar>
  )
}

export default Navigation;