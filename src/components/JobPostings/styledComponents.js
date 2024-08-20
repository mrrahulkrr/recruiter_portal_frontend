// src/components/JobPostings/styledComponents.js

import styled from 'styled-components';
import { FaSearch, FaEdit, FaTrash, FaEye } from 'react-icons/fa';

export const Container = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 3rem 1rem;
`;

export const Content = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: #111827;
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: 640px) {
    width: 50%;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  outline: none;
  &:focus {
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

export const FilterSelect = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid #d1d5db;
  outline: none;
  &:focus {
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

export const JobGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

export const JobCard = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

export const JobTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const JobInfo = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const JobType = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const JobActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const ViewDetailsButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: #2563eb;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: #e5e7eb;
  }

  svg {
    margin-right: 0.5rem;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const EditButton = styled(FaEdit)`
  background-color: #fbbf24;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #f59e0b;
  }
`;

export const DeleteButton = styled(FaTrash)`
  background-color: #ef4444;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`;

export const ApplyButton = styled.button`
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #059669;
  }
`;

export const NoJobsMessage = styled.div`
  text-align: center;
  color: #4b5563;
  margin-top: 2rem;
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 28rem;
`;

export const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  outline: none;
  &:focus {
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  outline: none;
  &:focus {
    ring: 2px;
    ring-color: #3b82f6;
    border-color: transparent;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const SaveButton = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  &:hover {
    background-color: #1d4ed8;
  }
  transition: background-color 0.3s ease-in-out;
`;

export const CancelButton = styled.button`
  background-color: #d1d5db;
  color: #1f2937;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  &:hover {
    background-color: #9ca3af;
  }
  transition: background-color 0.3s ease-in-out;
`;

export const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    margin: 0 0.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid #d1d5db;
    background-color: white;
    color: #374151;
    border-radius: 0.25rem;
    cursor: pointer;

    &:hover {
      background-color: #f3f4f6;
    }

    &:focus {
      outline: none;
      ring: 2px;
      ring-color: #3b82f6;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

export const Tag = styled.span`
  background-color: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.875rem;
`;

export const JobCardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;