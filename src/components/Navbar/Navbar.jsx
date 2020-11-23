import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
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
      <nav>
        <Navbar dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Crypt It Baby</NavbarBrand>
            <NavbarToggler onClick={this.toogle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Hash</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/encoding" className="nav-link">Encoding</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/cipher" className="nav-link">Cipher</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/rsa" className="nav-link">RSA</Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/aes" className="nav-link">AES</Link>
                    </li>
                  </ul>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </nav>
    )
  }
}