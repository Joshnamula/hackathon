import React, { useState } from 'react';
import './InfrastructureFeedbackForm.css';

const HostelFeedbackForm = () => {
  const [formData, setFormData] = useState({
    cleanliness: '',
    commonAreaMaintenance: '',
    lightingInRooms: '',
    foodQuality: '',
    foodVariety: '',
    diningCleanliness: '',
    staffResponsiveness: '',
    staffApproachability: '',
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
      cleanliness: '',
      commonAreaMaintenance: '',
      lightingInRooms: '',
      foodQuality: '',
      foodVariety: '',
      diningCleanliness: '',
      staffResponsiveness: '',
      staffApproachability: '',
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
       <h1 className="form-heading">Infrastructure Feedback Form</h1>
      <div className="form-content">
        {/* Hostel Cleanliness */}
        <div className="form-group">
          <label className="label">Rate the cleanliness of your room:</label>
          <div className="radio-group">
            {renderRatingOptions('cleanliness', formData.cleanliness)}
          </div>
        </div>

        {/* Common Area Maintenance */}
        <div className="form-group">
          <label className="label">How would you rate the maintenance of common areas?</label>
          <div className="radio-group">
            {renderRatingOptions('commonAreaMaintenance', formData.commonAreaMaintenance)}
          </div>
        </div>

        {/* Lighting in Rooms */}
        <div className="form-group">
          <label className="label">Is there adequate lighting in your room?</label>
          <div className="radio-group">
            {renderRatingOptions('lightingInRooms', formData.lightingInRooms)}
          </div>
        </div>

        {/* Mess Quality */}
        <div className="form-group">
          <label className="label">Rate the quality of food provided in the mess:</label>
          <div className="radio-group">
            {renderRatingOptions('foodQuality', formData.foodQuality)}
          </div>
        </div>

        {/* Food Variety */}
        <div className="form-group">
          <label className="label">How satisfied are you with the variety of meals?</label>
          <div className="radio-group">
            {renderRatingOptions('foodVariety', formData.foodVariety)}
          </div>
        </div>

        {/* Dining Cleanliness */}
        <div className="form-group">
          <label className="label">Are the dining facilities clean and well-maintained?</label>
          <div className="radio-group">
            {renderRatingOptions('diningCleanliness', formData.diningCleanliness)}
          </div>
        </div>

        {/* Staff Responsiveness */}
        <div className="form-group">
          <label className="label">How responsive is the hostel management to your concerns?</label>
          <div className="radio-group">
            {renderRatingOptions('staffResponsiveness', formData.staffResponsiveness)}
          </div>
        </div>

        {/* Staff Approachability */}
        <div className="form-group">
          <label className="label">How approachable are the staff members?</label>
          <div className="radio-group">
            {renderRatingOptions('staffApproachability', formData.staffApproachability)}
          </div>
        </div>

        {/* Overall Satisfaction */}
        <div className="form-group">
          <label className="label">Overall, how satisfied are you with your hostel experience?</label>
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

export default HostelFeedbackForm;
