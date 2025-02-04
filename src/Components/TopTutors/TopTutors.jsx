import React from "react";
import './top-tutors.css'
import "bootstrap/dist/css/bootstrap.min.css";
import weekly_top_tutor1 from "../../assets/images/Albert-Flores.svg";
import weekly_top_tutor2 from "../../assets/images/Darrell-Steward.svg";
import weekly_top_tutor3 from "../../assets/images/Jane-Cooper.svg";
import weekly_top_tutor4 from "../../assets/images/Julia-Anatole.svg";
import weekly_top_tutor5 from "../../assets/images/Michael-Roberts.svg";

function TopTutors() {
  return (
    <div className="container my-4 mt-5 ">
      {/* Section Title */}
      <h1 className="text-left mb-5 top-heading">Weekly Top Live Tutors</h1>

      {/* Card 1 */}
      <div className="row row-cols-2.5 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 g-3 flex-nowrap overflow-auto">

        <div className="col">
          <div className="card text-center border-1 rounded-3" style={{ borderColor: "#D9E2FF", height: "250px" }}>
            <img
              src={weekly_top_tutor1}
              className="card-img-top rounded-circle mx-auto mt-4"
              alt="Tutor 1"
              style={{ width: "86px", height: "86px" }}
            />
            <div className="card-bod pt-4 ">
              <h5 className="card-title">Albert Flores</h5>
              <p className="card-text text-primary mb-0">Math 116</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col">
          <div className="card text-center border-1 rounded-3" style={{ borderColor: "#D9E2FF", height: "250px" }}>
            <img
              src={weekly_top_tutor2}
              className="card-img-top rounded-circle mx-auto mt-4"
              alt="Tutor 2"
              style={{ width: "86px", height: "86px" }}
            />
            <div className="card-bod pt-4">
              <h5 className="card-title ">Darrell Steward</h5>
              <p className="card-text text-primary mb-0">Bio 120</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col">
          <div className="card text-center border-1 rounded-3" style={{ borderColor: "#D9E2FF", height: "250px" }}>
            <img
              src={weekly_top_tutor3}
              className="card-img-top rounded-circle mx-auto mt-4"
              alt="Tutor 3"
              style={{ width: "86px", height: "86px" }}
            />
            <div className="card-bod pt-4">
              <h5 className="card-title ">Jane Cooper</h5>
              <p className="card-text text-primary mb-0">Phy 110</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col">
          <div className="card text-center border-1 rounded-3" style={{ borderColor: "#D9E2FF", height: "250px" }}>
            <img
              src={weekly_top_tutor4}
              className="card-img-top rounded-circle mx-auto mt-4"
              alt="Tutor 4"
              style={{ width: "86px", height: "86px" }}
            />
            <div className="card-bod mx-auto pt-4">
              <h5 className="card-title ">Julia Anatole</h5>
              <p className="card-text text-primary mb-0">Programming</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="col">
          <div className="card text-center border-1 rounded-3" style={{ borderColor: "#D9E2FF", height: "250px" }}>
            <img
              src={weekly_top_tutor5}
              className="card-img-top rounded-circle mx-auto mt-4"
              alt="Tutor 5"
              style={{ width: "86px", height: "86px" }}
            />
            <div className="card-bod mx-auto pt-4 text-center">
              <h5 className="card-title text-center">Michael Roberts</h5>
              <p className="card-text text-primary mb-0">Chem 105</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTutors;
