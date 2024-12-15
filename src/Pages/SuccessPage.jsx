import React from "react";
import SuccessImage from "../Assets/success.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function SuccessPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card p-4 d-flex justify-content-center align-items-center"
        style={{ width: "462px", height: "568px", maxHeight: "90vh", borderRadius: "10px" }}
      >
        <img
          src={SuccessImage}
          alt="Success"
          className="img-fluid"
          style={{ width: "88px", height: "88px" }}
        />

        <h1
          className="fw-semibold"
          style={{ fontSize: "16px", color: "#000000", marginTop:'39px' }}
        >
          Success
        </h1>

        <p className="text-secondary" style={{ fontSize: "12px", textAlign:'left', marginTop:'20px' }}>
          Congratulations, you have <br />
          successfully completed log in!
        </p>

        <button
          className="btn btn-primary width-94px height-19px"
          style={{
            fontSize: "16px",
            backgroundColor: "#3D5CFF",
            borderRadius: "3px",
            marginTop:'34px',
            width:'80%'
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;


