import React, { useState } from 'react';
import './NetworkFeedbackForm.css';

const NetworkFeedbackForm = () => {
  const [formData, setFormData] = useState({
    studentID: '',
    department: '',
    networkQuality: '',
    connectivityIssues: '',
    wifiCoverage: '',
    speedPerformance: '',
    itSupport: '',
    overallSatisfaction: '',
    commentsSuggestions: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    setFormData({
      studentID: '',
      department: '',
      networkQuality: '',
      connectivityIssues: '',
      wifiCoverage: '',
      speedPerformance: '',
      itSupport: '',
      overallSatisfaction: '',
      commentsSuggestions: '',
    });
  };

  const renderRatingOptions = (name, currentValue) => {
    return [1, 2, 3, 4, 5].map((num) => (
      <label key={`${name}-${num}`}>
        <input
          type="radio"
          name={name}
          value={num}
          checked={currentValue === String(num)}
          onChange={handleChange}
          required
        />
        {num}
      </label>
    ));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
       <h1 className="form-heading">Network Feedback Form</h1>
      <div className="form-content">
        {/* General Information */}
        <div className="form-group">
          <label className="label">Student ID (optional):</label>
          <input
            type="text"
            name="studentID"
            value={formData.studentID}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label">Department/Program:</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        {/* Network Quality */}
        <div className="form-group">
          <label className="label">Rate the overall quality of the internet connection:</label>
          <div className="radio-group">
            {renderRatingOptions('networkQuality', formData.networkQuality)}
          </div>
        </div>

        {/* Connectivity Issues */}
        <div className="form-group">
          <label className="label">How often do you experience connectivity issues?</label>
          <div className="radio-group">
            {renderRatingOptions('connectivityIssues', formData.connectivityIssues)}
          </div>
        </div>

        {/* Wi-Fi Coverage */}
        <div className="form-group">
          <label className="label">Is there adequate Wi-Fi coverage in your area?</label>
          <div className="radio-group">
            {renderRatingOptions('wifiCoverage', formData.wifiCoverage)}
          </div>
        </div>

        {/* Speed and Performance */}
        <div className="form-group">
          <label className="label">Rate the speed of the internet connection:</label>
          <div className="radio-group">
            {renderRatingOptions('speedPerformance', formData.speedPerformance)}
          </div>
        </div>

        {/* IT Support */}
        <div className="form-group">
          <label className="label">How satisfied are you with IT support responsiveness?</label>
          <div className="radio-group">
            {renderRatingOptions('itSupport', formData.itSupport)}
          </div>
        </div>

        {/* Overall Satisfaction */}
        <div className="form-group">
          <label className="label">Overall, how satisfied are you with network facilities?</label>
          <div className="radio-group">
            {renderRatingOptions('overallSatisfaction', formData.overallSatisfaction)}
          </div>
        </div>

        {/* Comments/Suggestions */}
        <div className="form-group">
          <label className="label">Please provide any additional comments or suggestions:</label>
          <textarea
            name="commentsSuggestions"
            value={formData.commentsSuggestions}
            onChange={handleChange}
            className="input feedback-textarea"
          />
        </div>
      </div>

      <div className="submit-container">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
};

export default NetworkFeedbackForm;
