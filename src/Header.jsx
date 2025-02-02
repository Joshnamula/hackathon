import React from "react";
import "./Header.css";

const Header = () => (
  <header>
     <div className="header-flex-container">
    <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Indian_Maritime_University_logo.jpg/200px-Indian_Maritime_University_logo.jpg"
            alt="Logo"
          />
        </div>
    <div className="flex">
      <div>
        <h1>Indian Maritime University Kolkata</h1>
        <p>Kolkata Campus is a post-secondary institution in India specialising in marine engineering.</p>
        <p>P-19, Taratala Rd, CPT Colony, Alipore, Kolkata, West Bengal 700088</p>
      </div>
      </div>
      <div className="login">
            <img
              src="https://t3.ftcdn.net/jpg/02/61/90/28/360_F_261902858_onbxqSHf193X4w7e8fdRH8vjjoT3vOVZ.jpg"
              alt="Login Icon"
            />
            <p></p>
            </div>
          
     
    </div>
  </header>
);

export default Header;
