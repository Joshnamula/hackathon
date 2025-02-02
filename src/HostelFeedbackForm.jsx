// import React, { useState } from 'react';
// import './HostelFeedbackForm.css';

// const HostelFeedbackForm = () => {
//   const [formData, setFormData] = useState({
//     cleanliness: '',
//     commonAreaMaintenance: '',
//     lightingInRooms: '',
//     foodQuality: '',
//     foodVariety: '',
//     diningCleanliness: '',
//     staffResponsiveness: '',
//     staffApproachability: '',
//     overallSatisfaction: '',
//     commentsSuggestions: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Submitted Data:', formData);
//     setFormData({
//       cleanliness: '',
//       commonAreaMaintenance: '',
//       lightingInRooms: '',
//       foodQuality: '',
//       foodVariety: '',
//       diningCleanliness: '',
//       staffResponsiveness: '',
//       staffApproachability: '',
//       overallSatisfaction: '',
//       commentsSuggestions: '',
//     });
//   };

//   const renderRatingOptions = (name, currentValue) => {
//     return [1, 2, 3, 4, 5].map((num) => (
//       <label key={${name}-${num}}>
//         <input
//           type="radio"
//           name={name}
//           value={num}
//           checked={currentValue === String(num)}
//           onChange={handleChange}
//           required
//         />
//         {num}
//       </label>
//     ));
//   };

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
      
//       <h1 className="form-heading">Hostel Feedback Form</h1>

//       <div className="form-content">
//         <div className="form-group">
//           <label className="label">Rate the cleanliness of your room:</label>
//           <div className="radio-group">
//             {renderRatingOptions('cleanliness', formData.cleanliness)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">How would you rate the maintenance of common areas?</label>
//           <div className="radio-group">
//             {renderRatingOptions('commonAreaMaintenance', formData.commonAreaMaintenance)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">Is there adequate lighting in your room?</label>
//           <div className="radio-group">
//             {renderRatingOptions('lightingInRooms', formData.lightingInRooms)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">Rate the quality of food provided in the mess:</label>
//           <div className="radio-group">
//             {renderRatingOptions('foodQuality', formData.foodQuality)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">How satisfied are you with the variety of meals?</label>
//           <div className="radio-group">
//             {renderRatingOptions('foodVariety', formData.foodVariety)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">Are the dining facilities clean and well-maintained?</label>
//           <div className="radio-group">
//             {renderRatingOptions('diningCleanliness', formData.diningCleanliness)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">How responsive is the hostel management to your concerns?</label>
//           <div className="radio-group">
//             {renderRatingOptions('staffResponsiveness', formData.staffResponsiveness)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">How approachable are the staff members?</label>
//           <div className="radio-group">
//             {renderRatingOptions('staffApproachability', formData.staffApproachability)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">Overall, how satisfied are you with your hostel experience?</label>
//           <div className="radio-group">
//             {renderRatingOptions('overallSatisfaction', formData.overallSatisfaction)}
//           </div>
//         </div>

//         <div className="form-group">
//           <label className="label">Please provide any additional comments or suggestions:</label>
//           <textarea
//             name="commentsSuggestions"
//             value={formData.commentsSuggestions}
//             onChange={handleChange}
//             className="input feedback-textarea"
//           />
//         </div>
//       </div>

//       <div className="submit-container">
//         <button type="submit" className="submit-button">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default HostelFeedbackForm;
import React, { useState } from 'react';
import './HostelFeedbackForm.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const category = 'Hostel';

    const response = await fetch('http://localhost:5000/submit-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category, formData }),
    });

    if (response.ok) {
      console.log('Feedback submitted successfully');
    } else {
      console.error('Error submitting feedback');
    }

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

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1 className="form-heading">Hostel Feedback Form</h1>
      <div className="form-content">
        <div className="form-group">
          <label>How would you rate the cleanliness of the hostel?</label>
          <input
            type="text"
            name="cleanliness"
            value={formData.cleanliness}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>How is the maintenance of the common areas?</label>
          <input
            type="text"
            name="commonAreaMaintenance"
            value={formData.commonAreaMaintenance}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rate the lighting in rooms</label>
          <input
            type="text"
            name="lightingInRooms"
            value={formData.lightingInRooms}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>How would you rate the food quality?</label>
          <input
            type="text"
            name="foodQuality"
            value={formData.foodQuality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>How is the food variety?</label>
          <input
            type="text"
            name="foodVariety"
            value={formData.foodVariety}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Rate the cleanliness of the dining area</label>
          <input
            type="text"
            name="diningCleanliness"
            value={formData.diningCleanliness}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>How responsive is the staff to requests?</label>
          <input
            type="text"
            name="staffResponsiveness"
            value={formData.staffResponsiveness}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>How approachable is the staff?</label>
          <input
            type="text"
            name="staffApproachability"
            value={formData.staffApproachability}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Overall satisfaction with the hostel</label>
          <input
            type="text"
            name="overallSatisfaction"
            value={formData.overallSatisfaction}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Any comments or suggestions?</label>
          <textarea
            name="commentsSuggestions"
            value={formData.commentsSuggestions}
            onChange={handleChange}
            required
          />
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default HostelFeedbackForm;