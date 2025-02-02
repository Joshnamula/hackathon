// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css"; 
// import Header from "./Header"; 

// const categories = [
//   { name: "Academic Feedback", path: "/academic-feedback", imageUrl: "https://www.abdn.ac.uk/img/1200x/media/site/students/content-images/Your_Academic_Feedback.png" },
//   { name: "Transport", path: "/transport-feedback", imageUrl: "https://www.tandfonline.com/cms/asset/81e4c178-a372-45c6-8b58-6be427329c8b/ttrv20.v045.i01.cover.jpg" },
//   { name: "Hostel", path: "/hostel-feedback", imageUrl: "https://media.istockphoto.com/id/1141395450/vector/diverse-young-people-living-in-hostel-male-and-female-tourist-characters-move-into-motel-for.jpg?s=612x612&w=0&k=20&c=BHzaO0y4iAtZPziVqEY8SOVdQBhXRsOAYaW_XeNHM-I=" },
//   { name: "Cafeteria", path: "/cafeteria-feedback", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHLHATPdgWTpSnfXoyt_m0eOG-3Bpth9kDw&s" },
//   { name: "Network", path: "/network-feedback", imageUrl: "https://as2.ftcdn.net/v2/jpg/00/71/16/27/1000_F_71162790_0xH7DMpbqgQWInKY10zLb6d3633nKuYB.jpg" },
//   { name: "Infrastructure", path: "/infrastructure-feedback", imageUrl: "https://www.shutterstock.com/image-photo/infrastructure-word-alphabet-letters-on-260nw-2531022761.jpg" },
// ];

// const Home = () => (
//   <div className="home-container">
//     <Header />
//     <main className="categories-grid">
//       {categories.map((category, index) => (
//         <Link to={category.path} key={index} className="category-card">
//           <div className="card-image" style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
//           <div className="card-text">
//             <h3>{category.name}</h3>
//           </div>
//         </Link>
//       ))}
//     </main>
//   </div>
// );

// export default Home;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file
import Header from "./Header"; // Import Header component
import CreateFormModal from "./CreateFormModal"; // New component for creating form

const categories = [
  { name: "Academic Feedback", path: "/academic-feedback", imageUrl: "https://www.abdn.ac.uk/img/1200x/media/site/students/content-images/Your_Academic_Feedback.png" },
  { name: "Transport", path: "/transport-feedback", imageUrl: "https://www.tandfonline.com/cms/asset/81e4c178-a372-45c6-8b58-6be427329c8b/ttrv20.v045.i01.cover.jpg" },
  { name: "Hostel", path: "/hostel-feedback", imageUrl: "https://media.istockphoto.com/id/1141395450/vector/diverse-young-people-living-in-hostel-male-and-female-tourist-characters-move-into-motel-for.jpg?s=612x612&w=0&k=20&c=BHzaO0y4iAtZPziVqEY8SOVdQBhXRsOAYaW_XeNHM-I=" },
  { name: "Cafeteria", path: "/cafeteria-feedback", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgHLHATPdgWTpSnfXoyt_m0eOG-3Bpth9kDw&s" },
  { name: "Network", path: "/network-feedback", imageUrl: "https://as2.ftcdn.net/v2/jpg/00/71/16/27/1000_F_71162790_0xH7DMpbqgQWInKY10zLb6d3633nKuYB.jpg" },
  { name: "Infrastructure", path: "/infrastructure-feedback", imageUrl: "https://www.shutterstock.com/image-photo/infrastructure-word-alphabet-letters-on-260nw-2531022761.jpg" },
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [forms, setForms] = useState([]); // Store created forms

  const handleCreateForm = (newForm) => {
    setForms([...forms, newForm]);
    setShowModal(false);
  };

  return (
    <div className="home-container">
      <Header />
      <main className="categories-grid">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="category-card">
            <div className="card-image" style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
            <div className="card-text">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
        {forms.map((form, index) => (
          <div className="category-card" key={index}>
            <h3>{form.title}</h3>
            <p>{form.questions.length} Questions</p>
            {/* Clicking this can expand or open the form's questions */}
          </div>
        ))}
      </main>
      <button className="add-form-btn" onClick={() => setShowModal(true)}>+</button>
      {showModal && <CreateFormModal onCreateForm={handleCreateForm} onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Home;
