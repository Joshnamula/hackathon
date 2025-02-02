import React, { useState } from "react";
import CreateFormModal from "./CreateFormModal";

const FormManager = () => {
  const [forms, setForms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [expandedForm, setExpandedForm] = useState(null);

  const handleCreateForm = (newForm) => {
    setForms([...forms, newForm]);
    setShowModal(false);
  };

  return (
    <div>
      <button className="add-form-btn" onClick={() => setShowModal(true)}>+</button>

      {showModal && <CreateFormModal onCreateForm={handleCreateForm} onClose={() => setShowModal(false)} />}

      <div>
        <h2>Saved Forms</h2>
        {forms.map((form, index) => (
          <div
            key={index}
            className="form-container"
            onClick={() => setExpandedForm(expandedForm === index ? null : index)}
          >
            <h3>{form.title}</h3>

            {expandedForm === index && (
              <ul>
                {form.questions.map((q, idx) => (
                  <li key={idx}>{q.question} ({q.type})</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormManager;
