//  src/components/Navbar/index.jsx
import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaBriefcase } from 'react-icons/fa';
import {
  Nav,
  NavContainer,
  NavContent,
  LogoContainer,
  LogoLink,
  LogoIcon,
  LogoText,
  NavLinks,
  NavLinkContainer,
  StyledNavLink
} from './styledComponents';

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <NavContent>
          <LogoContainer>
            <LogoLink to="/">
              <LogoIcon />
              <LogoText>Recruiters Portal</LogoText>
            </LogoLink>
          </LogoContainer>
          <NavLinks>
            <NavLinkContainer>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/JobPostings">Job Postings</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </NavLinkContainer>
          </NavLinks>
        </NavContent>
      </NavContainer>
    </Nav>
  );
}

function NavLink({ href, children }) {
  return (
    <StyledNavLink to={href}>
      {children}
    </StyledNavLink>
  );
}