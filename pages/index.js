import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default () => (
  <div>
    <Navbar color="danger" inverse toggleable>
      <NavbarToggler right />
      <NavbarBrand href="/">Red Dog Progress</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Login</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
    <h1>This is just so easy!</h1>
  </div>
);
