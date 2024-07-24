import React from 'react';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './HeaderElements';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo as={Link} smooth to="/#home">Jose M Garcia</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#experience">Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#projects">Projects</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to="/contact">Contact</NavLinks>
                    </NavItem> */}
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Header;