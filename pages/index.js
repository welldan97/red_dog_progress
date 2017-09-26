import React from 'react';
import withRedux from 'next-redux-wrapper';
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

import initStore from '../config/store';
import Week from '../app/Week';
import * as category from '../app/category';
import * as entry from '../app/entry';

class Index extends React.Component {
  static async getInitialProps({ store, isServer }) {
    await store.dispatch(category.index());
    await store.dispatch(entry.actions.fetchEntries());
    return { isServer };
  }

  render() {
    return (
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
              <Week today={new Date()} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRedux(initStore)(Index);
