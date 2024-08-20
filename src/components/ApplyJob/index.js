//  src/components/ApplyJob/index.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getJobs, applyForJob } from '../../services/api';
import {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  SubmitButton,
  BackButton
} from './styledComponents';

export default function ApplyJob() {
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const response = await getJobs(id);
      setJob(response.data);
    } catch (error) {
      console.error('Error fetching job: ', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await applyForJob(id, formData);
        alert('Application submitted successfully!');
        navigate(`/Job/${id}`);
      } catch (error) {
        console.error('Error applying for job:', error);
        alert('Error submitting application. Please try again.');
      }
  };

  if (!job) return <div>Loading...</div>;

  return (
    <Container>
      <Title>Apply for {job.title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <TextArea
          name="resume"
          value={formData.resume}
          onChange={handleChange}
          placeholder="Paste your resume or write a brief introduction"
          required
        />
        <SubmitButton type="submit">Submit Application</SubmitButton>
      </Form>
      <BackButton onClick={() => navigate(`/Job/${id}`)}>Back to Job Details</BackButton>
    </Container>
  );
}