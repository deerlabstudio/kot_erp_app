import React from 'react';
import {
  Navbar,
  Button,
  Dropdown,
} from 'react-bootstrap';

// Styles
import '../../styles/TopBar.css';

const TopBar = props => (
  <Navbar className="justify-content-between top-bar-nav" bg="light" expand="lg">
    <div>
      <Button className="toogle-menu-button" onClick={props.toogleSideBar}>X</Button>
    </div>
    <div className="topbar-user">
      <Dropdown>
        <Dropdown.Toggle variant="info" id="user-top-menu">
          Opciones
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={props.deleteSession}>Salir</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  </Navbar>
);

export default TopBar;
