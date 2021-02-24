import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container,
} from 'reactstrap';

export const NavbarWrapper = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<NavContainer>
			<Navbar dark expand="sm" className="mb-5">
				<Container>
					<NavbarBrand href="/">Crypt It Baby</NavbarBrand>
					<NavbarToggler onClick={() => setIsOpen} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<ul className="navbar-nav mr-auto">
									<li className="navbar-item">
										<Link to="/" className="nav-link">
											Hash
										</Link>
									</li>
									<li className="navbar-item">
										<Link to="/encoding" className="nav-link">
											Encoding
										</Link>
									</li>
									<li className="navbar-item">
										<Link to="/cipher" className="nav-link">
											Cipher
										</Link>
									</li>
									<li className="navbar-item">
										<Link to="/rsa" className="nav-link">
											RSA
										</Link>
									</li>
									<li className="navbar-item">
										<Link to="/aes" className="nav-link">
											AES
										</Link>
									</li>
								</ul>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	height: 60px;
	background-color: #1c1c1c;
	font-family: 'Zilla Slab', serif;
`;
