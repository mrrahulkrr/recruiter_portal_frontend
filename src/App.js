import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import JobPostings from './components/JobPostings';
import CreateJobPost from './components/CreateJobPost';
import JobDetails from './components/Job';
import ApplyJob from './components/ApplyJob';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/JobPostings" element={<JobPostings />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/CreateJobPost" element={<CreateJobPost />} />
        <Route path="/apply/:id" element={<ApplyJob />} />
      </Routes>
    </Router>
  );
}

export default App;
