import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavMenu, NavItem, NavLinks, MobileIcon } from './HeaderElements';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo as={Link} smooth to="/#home">Jose M Garcia</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu isOpen={isOpen}>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#home" onClick={closeMenu}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#about" onClick={closeMenu}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#experience" onClick={closeMenu}>Experience</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks as={Link} smooth to="/#projects" onClick={closeMenu}>Projects</NavLinks>
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