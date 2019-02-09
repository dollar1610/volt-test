import React from 'react';
import { Container, Nav, NavItem, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router';
import './index.scss';
// import './index.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="menu bg-light">
        <Container>
          <Navbar light expand="md">
            <Nav>
              <NavItem>
                <Link className="logo" to="/">Invoice App</Link>
              </NavItem>
            </Nav>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="menu-items" navbar>
                <NavItem>
                  <Link to="/invoices">Invoices</Link>
                </NavItem>
                <NavItem className="menu-items__item">
                  <Link to="/products">Products</Link>
                </NavItem>
                <NavItem className="menu-items__item">
                  <Link to="/customers">Customers</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    )
  }
}
