//  app/components/Hero/index.jsx

import React from 'react';

import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  HighlightText,
  HeroSubtitle,
  ButtonContainer,
  ViewJobsButton,
  CreateJobButton,
  SearchIcon,
  PlusIcon,
} from './styledComponents';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>
          Welcome to <HighlightText>Recruiters Portal</HighlightText>
        </HeroTitle>
        <HeroSubtitle>
          Streamline your recruitment process with our advanced platform. Manage applications efficiently and stay ahead in the tech industry.
        </HeroSubtitle>
        <ButtonContainer>
          <ViewJobsButton to='/JobPostings'>
            <SearchIcon />
            View Job Postings
          </ViewJobsButton>
          <CreateJobButton to='/CreateJobPost'>
            <PlusIcon />
            Create Job Post
          </CreateJobButton>
        </ButtonContainer>
      </HeroContent>
    </HeroContainer>
  );
};