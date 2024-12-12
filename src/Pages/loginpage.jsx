import React from "react";
import './loginpage.css'; // Link your CSS file here for custom styling

const AssignmentPage = () => {
  return (
    <div className="page-container">
      <div className="header">
        <span className="skip-button">Skip</span>
      </div>
      <div className="content">
        <img
          src="your-image-url-here"
          alt="Illustration of assignment submission"
          className="illustration"
        />
        <h1 className="title">Submit your assignments</h1>
        <p className="subtitle">
          Submit your assignments on time, make study more motivated !!!!!!
        </p>
        <div className="pagination">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <button className="login-button">Log in</button>
      </div>
    </div>
  );
};

export default AssignmentPage;
