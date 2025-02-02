import React, { useState } from "react";
import "./CreateFormModal.css";

const CreateFormModal = ({ onCreateForm, onClose }) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({ question: "", type: "text", options: [] });

  const handleAddQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ question: "", type: "text", options: [] });
  };

  const handleSaveForm = () => {
    onCreateForm({ title, questions });
    setTitle("");
    setQuestions([]);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New Form</h2>

        <div>
          <label>Form Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter form title"
          />
        </div>

        <div>
          <label>Question:</label>
          <input
            type="text"
            value={newQuestion.question}
            onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
            placeholder="Enter question"
          />
        </div>

        <div>
          <label>Answer Type:</label>
          <select
            value={newQuestion.type}
            onChange={(e) => setNewQuestion({ ...newQuestion, type: e.target.value })}
          >
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio Button</option>
          </select>
        </div>

        {(newQuestion.type === "checkbox" || newQuestion.type === "radio") && (
          <div>
            <label>Options (comma separated):</label>
            <input
              type="text"
              onChange={(e) => setNewQuestion({ ...newQuestion, options: e.target.value.split(",") })}
              placeholder="e.g. Option 1, Option 2"
            />
          </div>
        )}

     

        <button className="add-question-btn" onClick={handleAddQuestion}>Add Question</button>

        <div>
          <h3>Questions:</h3>
          <ul>
            {questions.map((q, idx) => (
              <li key={idx}>{q.question} ({q.type})</li>
            ))}
          </ul>
        </div>

        <div className="modal-footer">
        <button className="save-btn" onClick={handleSaveForm}>Save Form</button>
        <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default CreateFormModal;
