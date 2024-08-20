// src/components/Job/styledComponents.js
import styled from 'styled-components';

export const JobContainer = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  padding: 3rem 1rem;
  @media (min-width: 640px) {
    padding: 3rem 1.5rem;
  }
`;

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: #1a202c;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  color: #f7fafc;
  margin-bottom: 1rem;
`;

export const NotFoundText = styled.p`
  font-size: 1.125rem;
  color: #a0aec0;
  margin-bottom: 2rem;
`;

export const BackButton = styled.button`
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2563eb;
  }
`;

export const JobDetailsContainer = styled.div`
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  background-color: #2d3748;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  overflow: hidden;
`;

export const JobHeader = styled.div`
  padding: 1.5rem;
  background-color: #3b82f6;
  color: white;
`;

export const JobTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const JobCompany = styled.p`
  font-size: 1.125rem;
`;

export const JobContent = styled.div`
  padding: 1.5rem;
`;

export const JobInfo = styled.div`
  margin-bottom: 1rem;
`;

export const JobText = styled.p`
  color: #d1d5db;
  margin-bottom: 1rem;
`;

export const JobSubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #63b3ed;
  margin-bottom: 0.5rem;
`;

export const ApplicantsList = styled.ul`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ApplicantItem = styled.li`
  background-color: #4a5568;
  padding: 0.75rem;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
`;

export const ApplicantName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #f7fafc;
`;

export const ApplicantDate = styled.p`
  color: #a0aec0;
  font-size: 0.875rem;
`;

export const NoApplicantsText = styled.p`
  color: #a0aec0;
  margin-top: 0.5rem;
`;

export const Footer = styled.div`
  padding: 1rem 1.5rem;
  background-color: #4a5568;
  border-top: 1px solid #718096;
`;

export const ApplicantList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ApplyButton = styled(BackButton)`
  background-color: #4CAF50;
  &:hover {
    background-color: #45a049;
  }
`;
