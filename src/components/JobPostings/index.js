//  src/components/JobPostings/index.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getJobs, deleteJob, updateJob, applyForJob } from '../../services/api';
import { FaEye, FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import {
  Container,
  Content,
  Title,
  SearchContainer,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  FilterSelect,
  JobGrid,
  JobCard,
  JobCardContent,
  JobTitle,
  JobInfo,
  JobActions,
  ViewDetailsButton,
  ActionButtons,
  EditButton,
  DeleteButton,
  ApplyButton,
  NoJobsMessage,
  Modal,
  ModalContent,
  ModalTitle,
  Form,
  Input,
  TextArea,
  ButtonGroup,
  SaveButton,
  CancelButton,
  LoadingSpinner,
  Pagination,
  TagContainer,
  Tag
} from './styledComponents';

export default function JobPostings() {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [editingJob, setEditingJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(9);
  const navigate = useNavigate();

  // Mock user for demonstration purposes
  const user = { _id: '123', role: 'recruiter' }; // Change to 'user' to test user view

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const response = await getJobs();
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleJobClick = (id) => {
    navigate(`/Job/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteJob(id);
      setJobs(jobs.filter(job => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  const handleEdit = (job) => {
    setEditingJob(job);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedJob = await updateJob(editingJob._id, editingJob);
      setJobs(jobs.map(job => job._id === updatedJob.data._id ? updatedJob.data : job));
      setEditingJob(null);
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleEditChange = (e) => {
    setEditingJob({ ...editingJob, [e.target.name]: e.target.value });
  };

  const handleApply = async (jobId) => {
    try {
      await applyForJob(jobId, user._id);
      alert('Successfully applied for the job!');
      fetchJobs(); // Refresh job data to update applicants count
    } catch (error) {
      console.error('Error applying for job:', error);
    }
  };

  const filteredJobPostings = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === '' || job.type === selectedType)
    );
  });

  // Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobPostings.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Content>
        <Title>Explore Job Opportunities</Title>

        <SearchContainer>
          <SearchInputWrapper>
            <SearchInput
              type="text"
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchInputWrapper>

          <FilterSelect value={selectedType} onChange={handleFilterChange}>
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </FilterSelect>
        </SearchContainer>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <JobGrid>
              {currentJobs.map((job) => (
                <JobCard key={job._id}>
                  <JobCardContent>
                    <div>
                      <JobTitle>{job.title}</JobTitle>
                      <JobInfo>{job.company} - {job.location}</JobInfo>
                      <TagContainer>
                        <Tag>{job.type}</Tag>
                      </TagContainer>
                    </div>
                    <JobActions>
                      <ViewDetailsButton onClick={() => handleJobClick(job._id)}>
                        <FaEye /> View Details
                      </ViewDetailsButton>
                      {user.role === 'recruiter' ? (
                        <ActionButtons>
                          <EditButton onClick={() => handleEdit(job)}>
                            <FaEdit />
                          </EditButton>
                          <DeleteButton onClick={() => handleDelete(job._id)}>
                            <FaTrash />
                          </DeleteButton>
                        </ActionButtons>
                      ) : (
                        <ApplyButton onClick={() => handleApply(job._id)}>
                          Apply Now
                        </ApplyButton>
                      )}
                    </JobActions>
                    {user.role === 'recruiter' && (
                      <JobInfo>Applicants: {job.applicants.length}</JobInfo>
                    )}
                  </JobCardContent>
                </JobCard>
              ))}
            </JobGrid>

            {filteredJobPostings.length === 0 && (
              <NoJobsMessage>
                No job postings found matching your criteria.
              </NoJobsMessage>
            )}

            <Pagination>
              {[...Array(Math.ceil(filteredJobPostings.length / jobsPerPage)).keys()].map((number) => (
                <button key={number + 1} onClick={() => paginate(number + 1)}>
                  {number + 1}
                </button>
              ))}
            </Pagination>
          </>
        )}

        {editingJob && (
          <Modal>
            <ModalContent>
              <ModalTitle>Edit Job</ModalTitle>
              <Form onSubmit={handleUpdate}>
                <Input
                  type="text"
                  name="title"
                  value={editingJob.title}
                  onChange={handleEditChange}
                  placeholder="Job Title"
                />
                <Input
                  type="text"
                  name="company"
                  value={editingJob.company}
                  onChange={handleEditChange}
                  placeholder="Company"
                />
                <Input
                  type="text"
                  name="location"
                  value={editingJob.location}
                  onChange={handleEditChange}
                  placeholder="Location"
                />
                <FilterSelect
                  name="type"
                  value={editingJob.type}
                  onChange={handleEditChange}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </FilterSelect>
                <TextArea
                  name="description"
                  value={editingJob.description}
                  onChange={handleEditChange}
                  placeholder="Job Description"
                  rows="4"
                ></TextArea>
                <ButtonGroup>
                  <SaveButton type="submit">Save</SaveButton>
                  <CancelButton type="button" onClick={() => setEditingJob(null)}>
                    Cancel
                  </CancelButton>
                </ButtonGroup>
              </Form>
            </ModalContent>
          </Modal>
        )}
      </Content>
    </Container>
  );
}