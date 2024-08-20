// app/components/Hero/styledComponents.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa';

export const HeroContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #0b0e14, #00288c);
  color: white;
  padding: 6rem 1.5rem;
`;

export const HeroContent = styled.div`
  max-width: 64rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  @media (min-width: 768px) {
    font-size: 4rem;
  }
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.25;
`;

export const HighlightText = styled.span`
  color: #63b3ed;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  margin-bottom: 3rem;
  color: #a4d2fc;
  line-height: 1.625;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.3s, transform 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ViewJobsButton = styled(StyledLink)`
  background-color: #3b82f6;
  color: white;
  &:hover {
    background-color: #2563eb;
  }
`;

export const CreateJobButton = styled(StyledLink)`
  background-color: white;
  color: #2b6cb0;
  &:hover {
    background-color: #f7fafc;
  }
`;

export const Icon = styled.div`
  margin-right: 0.5rem;
`;

export const SearchIcon = styled(FaSearch)`
   margin-right: 0.5rem;
`;

export const PlusIcon = styled(FaPlus)`
   margin-right: 0.5rem;
`;
