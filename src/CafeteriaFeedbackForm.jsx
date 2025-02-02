import React, { useState } from 'react';
import './CafeteriaFeedbackForm.css';

const CafeteriaFeedbackForm = () => {
  const [formData, setFormData] = useState({
    foodQuality: '',
    menuVariety: '',
    cleanliness: '',
    staffInteraction: '',
    speedOfService: '',
    overallExperience: '',
    suggestionsForImprovement: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare the data to send to the backend
    const data = {
      category: 'cafeteria',
      formData,
    };
    
    try {
      const response = await fetch('http://localhost:5000/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        setFormData({
          foodQuality: '',
          menuVariety: '',
          cleanliness: '',
          staffInteraction: '',
          speedOfService: '',
          overallExperience: '',
          suggestionsForImprovement: '',
        });
      } else {
        console.log('Error submitting feedback');
      }
    } catch (err) {
      console.error('Network error:', err);
    }
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
       <h1 className="form-heading">Cafeteria Feedback Form</h1>
      <div className="form-content">
        {/* Food Quality */}
        <div className="form-group">
          <label className="label">Rate the quality of food served:</label>
          <div className="radio-group">
            {renderRatingOptions('foodQuality', formData.foodQuality)}
          </div>
        </div>

        {/* Menu Variety */}
        <div className="form-group">
          <label className="label">How satisfied are you with meal variety?</label>
          <div className="radio-group">
            {renderRatingOptions('menuVariety', formData.menuVariety)}
          </div>
        </div>

        {/* Cleanliness */}
        <div className="form-group">
          <label className="label">Rate the cleanliness of the dining area:</label>
          <div className="radio-group">
            {renderRatingOptions('cleanliness', formData.cleanliness)}
          </div>
        </div>

        {/* Staff Interaction */}
        <div className="form-group">
          <label className="label">Rate staff behavior and professionalism:</label>
          <div className="radio-group">
            {renderRatingOptions('staffInteraction', formData.staffInteraction)}
          </div>
        </div>

        {/* Speed of Service */}
        <div className="form-group">
          <label className="label">How satisfied are you with speed during peak hours?</label>
          <div className="radio-group">
            {renderRatingOptions('speedOfService', formData.speedOfService)}
          </div>
        </div>

        {/* Overall Experience */}
        <div className="form-group">
          <label className="label">Overall satisfaction with dining experience?</label>
          <div className="radio-group">
            {renderRatingOptions('overallExperience', formData.overallExperience)}
          </div>
        </div>

        {/* Suggestions for Improvement */}
        <div className="form-group">
          <label className="label">What improvements would you suggest for our cafeteria?</label>
          <textarea
            name="suggestionsForImprovement"
            value={formData.suggestionsForImprovement}
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

export default CafeteriaFeedbackForm;
