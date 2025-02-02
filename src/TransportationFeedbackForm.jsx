import React, { useState } from 'react';
import './TransportationFeedbackForm.css'; // Import the CSS file for styles

const TransportationFeedbackForm = () => {
  const [formData, setFormData] = useState({
    modeOfTransport: '',
    commuteTime: '',
    usePublicTransport: '',
    feelSafe: '',
    reliability: '',
    challenges: '',
    improvements: '',
    specificNeeds: '',
    encounterDelays: '',
  });

  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    setFormData({
      modeOfTransport: '',
      commuteTime: '',
      usePublicTransport: '',
      feelSafe: '',
      reliability: '',
      challenges: '',
      improvements: '',
      specificNeeds: '',
      encounterDelays: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
       <h1 className="form-heading">Transportation Feedback Form</h1>
      <div className="form-content">
        {/* Mode of Transport */}
        <div className="form-group">
          <label className="label">What is your primary mode of transportation to campus?</label>
          <select
            name="modeOfTransport"
            value={formData.modeOfTransport}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select</option>
            <option value="car">Car</option>
            <option value="bus">Bus</option>
            <option value="bicycle">Bicycle</option>
            <option value="walking">Walking</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Commute Time */}
        <div className="form-group">
          <label className="label">How long does your typical commute take?</label>
          <div className="radio-group">
            {['0-15 minutes', '16-30 minutes', '31-45 minutes', '46-60 minutes', '60+ minutes'].map((time) => (
              <label key={time}>
                <input
                  type="radio"
                  name="commuteTime"
                  value={time}
                  checked={formData.commuteTime === time}
                  onChange={handleChange}
                  required
                />
                {time}
              </label>
            ))}
          </div>
        </div>

        {/* Use Public Transport */}
        <div className="form-group">
          <label className="label">Do you use public transportation?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="usePublicTransport"
                value="yes"
                checked={formData.usePublicTransport === 'yes'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="usePublicTransport"
                value="no"
                checked={formData.usePublicTransport === 'no'}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </div>

        {/* Feel Safe */}
        <div className="form-group">
          <label className="label">Do you feel safe with your current mode of transportation?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="feelSafe"
                value="yes"
                checked={formData.feelSafe === 'yes'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="feelSafe"
                value="no"
                checked={formData.feelSafe === 'no'}
                onChange={handleChange}
                required
              />
              No
            </label>
          </div>
        </div>

        {/* Reliability */}
        <div className="form-group">
          <label className="label">How reliable is your primary mode of transportation?</label>
          <select
            name="reliability"
            value={formData.reliability}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select (1-5)</option>
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>

        {/* Challenges */}
        <div className="form-group">
          <label className="label">What challenges do you face with your current transportation?</label>
          <textarea
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            className="input feedback-textarea"
            required
          />
        </div>

        {/* Improvements */}
        <div className="form-group">
          <label className="label">Would you recommend any improvements for campus transportation services?</label>
          <textarea
            name="improvements"
            value={formData.improvements}
            onChange={handleChange}
            className="input feedback-textarea"
            required
          />
        </div>

        {/* Specific Needs */}
        <div className="form-group">
          <label className="label">Do you have any specific needs regarding transportation (e.g., accessibility requirements)?</label>
          <textarea
            name="specificNeeds"
            value={formData.specificNeeds}
            onChange={handleChange}
            className="input feedback-textarea"
            required
          />
        </div>

        {/* Encounter Delays */}
        <div className="form-group">
          <label className="label">How often do you encounter delays in your commute?</label>
          <select
            name="encounterDelays"
            value={formData.encounterDelays}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select</option>
            <option value="never">Never</option>
            <option value="rarely">Rarely</option>
            <option value="sometimes">Sometimes</option>
            <option value="often">Often</option>
            <option value="always">Always</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="submit-container">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
};

export default TransportationFeedbackForm;
