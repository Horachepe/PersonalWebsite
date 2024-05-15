import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks } from './HeaderElements';

const Header = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Jose M Garcia</NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/home">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/experience">Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/projects">Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/contact">Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Header;