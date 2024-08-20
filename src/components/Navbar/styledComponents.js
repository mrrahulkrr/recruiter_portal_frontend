// src/components/Navbar/styledComponents.js

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBriefcase } from 'react-icons/fa';

export const Nav = styled.nav`
  background-color: #bfdbfe;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

export const NavContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const LogoIcon = styled(FaBriefcase)`
  height: 2rem;
  width: 2rem;
  color: #2563eb;
`;

export const LogoText = styled.span`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #111827;
`;

export const NavLinks = styled.div`
  display: none;
  @media (min-width: 640px) {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledNavLink = styled(Link)`
  color: #374151;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }
`;