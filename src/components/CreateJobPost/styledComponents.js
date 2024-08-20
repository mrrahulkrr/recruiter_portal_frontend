// src/components/CreateJobPost/styledComponents.js
import styled from 'styled-components';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaFileAlt } from 'react-icons/fa';

export const Container = styled.div`
  background-color: #f3f4f6;
  min-height: 100vh;
  padding: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const FormWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.75rem;
  padding: 2rem;
  overflow: hidden
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2d3748;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  color: #4a5568;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  background-color: #f7fafc;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  background-color: #f7fafc;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-left: 2.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  background-color: #f7fafc;
  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2563eb;
  }
`;

export const BuildingIcon = styled(FaBuilding)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;


export const MapMarkerIcon = styled(FaMapMarkerAlt)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;

export const BriefcaseIcon = styled(FaBriefcase)`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;

export const FileIcon = styled(FaFileAlt)`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a0aec0;
`;
