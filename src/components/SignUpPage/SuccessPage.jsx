/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import SuccessImage from "../../assets/images/success.svg";
import "bootstrap/dist/css/bootstrap.min.css";

function SuccessPage() {

  const navigate = useNavigate();
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

        <Link to="/">
  <button
    className="btn btn-primary w-4/5 h-5 text-lg bg-blue-600 rounded-sm mt-8"
  >
    Go to Home
  </button>
</Link>

      </div>
    </div>
  );
}

export default SuccessPage;

