import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import './Navbar.css'

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.toogle = this.toogle.bind(this);
    this.state = {
      isOpen: false
    }
  }

  toogle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5" id="navbar">
          <Container>
            <NavbarBrand href="/">Crypt It Baby</NavbarBrand>
            <NavbarToggler onClick={this.toogle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://github.com/retr00exe">
                    GitHub
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}