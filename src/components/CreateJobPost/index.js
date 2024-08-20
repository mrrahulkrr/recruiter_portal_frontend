//  src/components/CreateJobPost/index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createJob } from '../../services/api';

import {
  Container,
  FormWrapper,
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  Select,
  Button,
  IconWrapper,
  BuildingIcon,
  MapMarkerIcon,
  BriefcaseIcon,
  FileIcon,
} from './styledComponents';

export default function CreateJobPost() {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: '',
    description: '',
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(jobData);
      navigate('/JobPostings');
    } catch (err) {
      console.error('error creating job:', err);
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Create Job Post</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="title">Job Title</Label>
            <Input
              type="text"
              id="title"
              name="title"
              value={jobData.title}
              onChange={handleChange}
              required
              placeholder="e.g. Senior Software Engineer"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="company">Company</Label>
            <IconWrapper>
              <BuildingIcon />
              <Input
                type="text"
                id="company"
                name="company"
                value={jobData.company}
                onChange={handleChange}
                required
                placeholder="Company Name"
              />
            </IconWrapper>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="location">Location</Label>
            <IconWrapper>
              <MapMarkerIcon />
              <Input
                type="text"
                id="location"
                name="location"
                value={jobData.location}
                onChange={handleChange}
                required
                placeholder="e.g. San Francisco, CA"
              />
            </IconWrapper>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="type">Job Type</Label>
            <IconWrapper>
              <BriefcaseIcon />
              <Select
                id="type"
                name="type"
                value={jobData.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
              </Select>
            </IconWrapper>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Job Description</Label>
            <IconWrapper>
              <FileIcon />
              <Textarea
                id="description"
                name="description"
                value={jobData.description}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Describe the job role, responsibilities, and requirements..."
              ></Textarea>
            </IconWrapper>
          </FormGroup>
          <Button type="submit">Create Job Post</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}
