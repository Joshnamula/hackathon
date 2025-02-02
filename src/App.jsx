// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';  // Import the Home component
import AcademicFeedbackForm from './AcademicFeedbackForm'; // Import the Academic Feedback Form
import TransportationFeedbackForm from './TransportationFeedbackForm'; // Import the Transport Feedback Form
import HostelFeedbackForm from './HostelFeedbackForm';
import CafeteriaFeedbackForm from './CafeteriaFeedbackForm';
import NetworkFeedbackForm from './NetworkFeedbackForm';
import InfrastructureFeedbackForm from './InfrastructureFeedbackForm';

const App = () => (
  <Router>  {/* Wrapping entire app with Router */}
    <Routes>
      <Route path="/" element={<Home />} />  {/* Home page route */}
      <Route path="/academic-feedback" element={<AcademicFeedbackForm />} />
      <Route path="/transport-feedback" element={<TransportationFeedbackForm />} />
      <Route path="/hostel-feedback" element={<HostelFeedbackForm />} />
      <Route path="/cafeteria-feedback" element={<CafeteriaFeedbackForm />} />
      <Route path="/network-feedback" element={<NetworkFeedbackForm/>} />
      <Route path="/infrastructure-feedback" element={<InfrastructureFeedbackForm/>} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default App;
