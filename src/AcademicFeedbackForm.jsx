// import React, { useState } from 'react';
// import './AcademicFeedbackForm.css';

// const AcademicFeedbackForm = () => {
//   const initialFormState = {
//     teachingQuality: '',
//     courseMaterials: '',
//     learningEnvironment: '',
//     supportServices: '',
//     overallExperience: '',
//     preferredLearningStyle: '',
//     courseFormat: '',
//     frequencyOfFeedback: '',
//     improvementsNeeded: '',
//     instructorFeedback: '',
//     challengingTopics: '',
//     engagementLevel: '',
//     clarityOfInstructions: '',
//     yearOfStudy: '',
//     major: '',
//     learningActivities: '',
//     assessmentMethods: '',
//   };

//   const [formData, setFormData] = useState(initialFormState);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Feedback Submitted Successfully!');
//     console.log('Submitted Data:', formData);
//     setFormData(initialFormState);
//   };

//   const renderRadioGroup = (name, labelText) => (
//     <div className="form-group">
//       <label className="label">{labelText}</label>
//       <div className="radio-group">
//         {[1, 2, 3, 4, 5].map((num) => (
//           <label key={`${name}-${num}`}>
//             <input
//               type="radio"
//               name={name}
//               value={num}
//               checked={formData[name] === String(num)}
//               onChange={handleChange}
//               required
//             />
//             {num}
//           </label>
//         ))}
//       </div>
//     </div>
//   );

//   const renderSelectInput = (name, labelText, options) => (
//     <div className="form-group">
//       <label className="label">{labelText}</label>
//       <select
//         name={name}
//         value={formData[name]}
//         onChange={handleChange}
//         required
//         className="input"
//       >
//         <option value="">Select</option>
//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//     </div>
//   );

//   return (
//     <form onSubmit={handleSubmit} className="form-container">
//        <h1 className="form-heading">Academic Feedback Form</h1>
//       <div className="form-content">
//         {renderRadioGroup('teachingQuality', 'Teaching Quality: "The instructor effectively communicates course content."')}
//         {renderRadioGroup('courseMaterials', 'Course Materials: "The course materials were relevant and up-to-date."')}
//         {renderRadioGroup('learningEnvironment', 'Learning Environment: "I feel comfortable participating in class discussions."')}
//         {renderRadioGroup('supportServices', 'Support Services: "The support services available to me are adequate."')}
//         {renderRadioGroup('overallExperience', 'Overall Experience: "I am satisfied with my overall learning experience."')}
        
//         {renderSelectInput('preferredLearningStyle', 'Preferred Learning Style:', ['Visual', 'Auditory', 'Kinesthetic', 'Reading/Writing'])}
//         {renderSelectInput('courseFormat', 'Course Format:', ['In-person', 'Online', 'Hybrid'])}
//         {renderSelectInput('frequencyOfFeedback', 'Frequency of Feedback:', ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'])}
        
//         <div className="form-group">
//           <label className="label">Improvements Needed: "What changes would you suggest to improve this course?"</label>
//           <textarea
//             name="improvementsNeeded"
//             value={formData.improvementsNeeded}
//             onChange={handleChange}
//             className="input feedback-textarea"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label className="label">Instructor Feedback: "What feedback do you have for the instructor?"</label>
//           <textarea
//             name="instructorFeedback"
//             value={formData.instructorFeedback}
//             onChange={handleChange}
//             className="input feedback-textarea"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label className="label">Challenging Topics: "Which topics did you find most challenging and why?"</label>
//           <textarea
//             name="challengingTopics"
//             value={formData.challengingTopics}
//             onChange={handleChange}
//             className="input feedback-textarea"
//             required
//           />
//         </div>

//         {renderRadioGroup('engagementLevel', 'Engagement Level: Rate your engagement from 1 (not engaged) to 5 (very engaged).')}
//         {renderRadioGroup('clarityOfInstructions', 'Clarity of Instructions: Rate clarity from 1 (very unclear) to 5 (very clear).')}
//         {renderSelectInput('yearOfStudy', 'Year of Study:', ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'])}

//         <div className="form-group">
//           <label className="label">Major/Field of Study:</label>
//           <input
//             type="text"
//             name="major"
//             value={formData.major}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//         </div>

//         <div className="form-group">
//           <label className="label">Learning Activities:</label>
//           <textarea
//             name="learningActivities"
//             value={formData.learningActivities}
//             onChange={handleChange}
//             className="input feedback-textarea"
//             required
//           />
//         </div>

//         {renderRadioGroup('assessmentMethods', 'Assessment Methods: Rate effectiveness from 1 to 5.')}
//       </div>

//       <div className="submit-container">
//         <button type="submit" className="submit-button">Submit</button>
//       </div>
//     </form>
//   );
// };

// export default AcademicFeedbackForm;
import React, { useState } from 'react';
import './AcademicFeedbackForm.css';

const AcademicFeedbackForm = () => {
  const initialFormState = {
    teachingQuality: '',
    courseMaterials: '',
    learningEnvironment: '',
    supportServices: '',
    overallExperience: '',
    preferredLearningStyle: '',
    courseFormat: '',
    frequencyOfFeedback: '',
    improvementsNeeded: '',
    instructorFeedback: '',
    challengingTopics: '',
    engagementLevel: '',
    clarityOfInstructions: '',
    yearOfStudy: '',
    major: '',
    learningActivities: '',
    assessmentMethods: '',
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback Submitted Successfully!');
    console.log('Submitted Data:', formData);
    setFormData(initialFormState);
  };

  const renderRadioGroup = (name, labelText) => (
    <div className="form-group">
      <label className="form-label">{labelText}</label>
      <div className="radio-group">
        {[1, 2, 3, 4, 5].map((num) => (
          <label key={`${name}-${num}`} className="radio-label">
            <input
              type="radio"
              name={name}
              value={num}
              checked={formData[name] === String(num)}
              onChange={handleChange}
              required
            />
            {num}
          </label>
        ))}
      </div>
    </div>
  );

  const renderSelectInput = (name, labelText, options) => (
    <div className="form-group">
      <label className="form-label">{labelText}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        className="form-select"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="academic-form">
        <h1 className="form-title">Academic Feedback Form</h1>
        <div className="form-content">
          {renderRadioGroup('teachingQuality', 'Teaching Quality:')}
          {renderRadioGroup('courseMaterials', 'Course Materials:')}
          {renderRadioGroup('learningEnvironment', 'Learning Environment:')}
          {renderRadioGroup('supportServices', 'Support Services:')}
          {renderRadioGroup('overallExperience', 'Overall Experience:')}

          {renderSelectInput('preferredLearningStyle', 'Preferred Learning Style:', ['Visual', 'Auditory', 'Kinesthetic', 'Reading/Writing'])}
          {renderSelectInput('courseFormat', 'Course Format:', ['In-person', 'Online', 'Hybrid'])}
          {renderSelectInput('frequencyOfFeedback', 'Frequency of Feedback:', ['Always', 'Often', 'Sometimes', 'Rarely', 'Never'])}

          <div className="form-group">
            <label className="form-label">Improvements Needed:</label>
            <textarea
              name="improvementsNeeded"
              value={formData.improvementsNeeded}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Instructor Feedback:</label>
            <textarea
              name="instructorFeedback"
              value={formData.instructorFeedback}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Challenging Topics:</label>
            <textarea
              name="challengingTopics"
              value={formData.challengingTopics}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>

          {renderRadioGroup('engagementLevel', 'Engagement Level:')}
          {renderRadioGroup('clarityOfInstructions', 'Clarity of Instructions:')}
          {renderSelectInput('yearOfStudy', 'Year of Study:', ['Freshman', 'Sophomore', 'Junior', 'Senior', 'Graduate'])}

          <div className="form-group">
            <label className="form-label">Major:</label>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Learning Activities:</label>
            <textarea
              name="learningActivities"
              value={formData.learningActivities}
              onChange={handleChange}
              className="form-textarea"
              required
            />
          </div>

          {renderRadioGroup('assessmentMethods', 'Assessment Methods:')}
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AcademicFeedbackForm;
