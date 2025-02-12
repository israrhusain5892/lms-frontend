import React from 'react'
import VectorIcon from "../../assets/icons/Vector.svg"
import AdditionalInfoPage from './AdditionalInfoPage'
import AcademicPage from './AcademicPage';
import { Button } from "react-bootstrap";

const StudentPage = () => {
    return (
        <>
            <div>
                <h1 style={{ fontSize: "34x" }}>Hello Ibrahim <img src={VectorIcon} alt="" /></h1>
                <h3 style={{ fontSize: "28x", color: "#2556EB" }}>Create Student Account</h3>
                <h5 style={{ fontSize: "22px" }}>Personal Information</h5>
            </div>

            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Full Name"
                        style={{ width: "449px", height: "54px" }} />
                </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label">Trainee Id</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Trainee Id"
                        // style="width: 449px; height: 54px;" />
                        style={{ width: "449px", height: "54px" }} />
                </div>

            </div>

            <div class="form-row d-flex flex-row align-items-center mt-3">
                <div class="me-3">
                    <label for="genderSelect" class="form-label">Gender</label>
                    <select class="form-select" id="genderSelect" style={{ width: "449px", height: "54px" }}>
                        <option selected disabled>Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label for="dob" class="form-label">Date of Birth</label>
                    <input type="date" class="form-control" id="dob"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">City</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter City"
                        style={{ width: "449px", height: "54px" }} />
                </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Address"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">State</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter State"
                        style={{ width: "449px", height: "54px" }} />
                </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label">Pin Code</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Pin Code"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">Country</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Country"
                        style={{ width: "449px", height: "54px" }} />
                </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Phone Number"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
            <AcademicPage />

            <AdditionalInfoPage />

            <div className="d-flex gap-3 mt-4">
                {/* Create Button */}
                <Button
                    className="fw-bold"
                    style={{ width: "142px", height: "56px", backgroundColor: "#3B76F6" }}
                >
                    Create
                </Button>

                {/* Edit Button */}
                <Button
                    className="fw-bold"
                    style={{ width: "142px", height: "56px", backgroundColor: "#DCDCDC", color: "#1E1E1E" }}
                >
                    Edit
                </Button>
            </div>
        </>
    )
}

export default StudentPage