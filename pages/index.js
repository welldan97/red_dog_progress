import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

  Container,
  Row,
  Col,
} from 'reactstrap';

import Week from '../app/week'

export default () => (
  <div>
    <Navbar color="danger" inverse toggleable>
      <NavbarToggler right />
      <NavbarBrand href="/">Red Dog Progress</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/components/" />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="mb-4" >
            Your weekly progress:
          </h2>
         <Week/>
        </Col>
      </Row>
    </Container>
  </div>
);
