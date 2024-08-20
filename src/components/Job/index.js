// src/components/Job/index.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getJobs, deleteJob, applyForJob, getApplicants } from '../../services/api';
import {
  JobContainer,
  NotFoundContainer,
  NotFoundTitle,
  NotFoundText,
  BackButton,
  JobDetailsContainer,
  JobHeader,
  JobTitle,
  JobCompany,
  JobContent,
  JobInfo,
  JobText,
  JobSubTitle,
  ApplicantsList,
  ApplicantItem,
  ApplicantName,
  ApplicantDate,
  NoApplicantsText,
  Footer,
  ApplyButton
} from './styledComponents';

export default function JobDetails() {
  const [job, setJob] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock user and role for demonstration purposes
  const user = { _id: '123', role: 'user' }; // Change to 'user' to test user view

  useEffect(() => {
    fetchJob();
    if (user.role === 'recruiter') {
      fetchApplicants();
    }
  }, [id, user.role]);

  const fetchJob = async () => {
    try {
      const response = await getJobs();
      const foundJob = response.data.find(j => j._id === id);
      setJob(foundJob);
    } catch (error) {
      console.error('Error fetching job: ', error);
    }
  };

  const fetchApplicants = async () => {
    try {
      const response = await getApplicants(id);
      setApplicants(response.data);
    } catch (error) {
      console.error('Error fetching applicants:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteJob(id);
      navigate('/JobPostings');
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleApply = async () => {
    // try {
    //   await applyForJob(id, user._id);
    //   alert('Successfully applied for the job!');
    //   fetchJob(); // Refresh job data to update applicants list
    // } catch (error) {
    //   console.error('Error applying for job:', error);
    // }
    navigate(`/apply/${id}`);
  };

  if (!job) {
    return (
      <NotFoundContainer>
        <div>
          <NotFoundTitle>Job Not Found</NotFoundTitle>
          <NotFoundText>Sorry, we could not find the job you are looking for.</NotFoundText>
          <BackButton onClick={() => navigate('/JobPostings')}>
            Back to Job Listings
          </BackButton>
        </div>
      </NotFoundContainer>
    );
  }

  return (
    <JobContainer>
      <JobDetailsContainer>
        <JobHeader>
          <JobTitle>{job.title}</JobTitle>
          <JobCompany>{job.company}</JobCompany>
        </JobHeader>
        <JobContent>
          <JobInfo>
            <JobText><strong>Location:</strong> {job.location}</JobText>
            <JobText><strong>Type:</strong> {job.type}</JobText>
          </JobInfo>
          <div>
            <JobSubTitle>Job Description</JobSubTitle>
            <JobText>{job.description}</JobText>
          </div>
          {user.role === 'recruiter' && (
            <div>
              <JobSubTitle>Applicants</JobSubTitle>
              {applicants.length > 0 ? (
                <ApplicantsList>
                  {applicants.map((applicant) => (
                    <ApplicantItem key={applicant._id}>
                      <ApplicantName>{applicant.name}</ApplicantName>
                      <ApplicantDate>Email: {applicant.email}</ApplicantDate>
                    </ApplicantItem>
                  ))}
                </ApplicantsList>
              ) : (
                <NoApplicantsText>No applicants yet.</NoApplicantsText>
              )}
            </div>
          )}
        </JobContent>
        <Footer>
          {user.role === 'user' && (
            <ApplyButton onClick={handleApply}>
              Apply for this Job
            </ApplyButton>
          )}
          <BackButton onClick={() => navigate('/JobPostings')}>
            Back to Job Listings
          </BackButton>
        </Footer>
      </JobDetailsContainer>
    </JobContainer>
  );
}