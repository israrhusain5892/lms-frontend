import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaUpload } from "react-icons/fa";

function AdditionalInfoPage() {
    const [profileFileName, setProfileFileName] = useState("");
    const [resumeFileName, setResumeFileName] = useState("");

    // for Profile Picture
    const handleProfileFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileFileName(file.name);
        } else {
            setProfileFileName("");
        }
    };

    // for Resume
    const handleResumeFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setResumeFileName(file.name);
        } else {
            setResumeFileName("");
        }
    };

    return (
        <div className="mt-4">
            <h2 style={{ fontSize: "22px" }}>Additional Information</h2>
            <div className="form-row d-flex flex-row align-items-center">
                {/* Profile Picture Upload */}
                <div className="me-3 position-relative">
                    <Form.Group controlId="profilePicture mt-4">
                        <Form.Label className="form-label">Profile Picture</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Upload your profile"
                                value={profileFileName}
                                readOnly
                                style={{ width: "449px", height: "54px" }}
                            />
                            <FaUpload
                                style={{
                                    position: "absolute",
                                    right: "15px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer"
                                }}
                                onClick={() => document.getElementById("uploadProfile").click()}
                            />
                            <Form.Control
                                type="file"
                                id="uploadProfile"
                                style={{ display: "none" }}
                                onChange={handleProfileFileChange}
                            />
                        </InputGroup>
                    </Form.Group>
                </div>

                {/* Resume Upload */}
                <div className="position-relative">
                    <Form.Group controlId="resumeUpload">
                        <Form.Label className="form-label">Resume</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="Upload your CV here"
                                value={resumeFileName}
                                readOnly
                                style={{ width: "449px", height: "54px" }}
                            />
                            <FaUpload
                                style={{
                                    position: "absolute",
                                    right: "15px",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer"
                                }}
                                onClick={() => document.getElementById("uploadCV").click()}
                            />
                            <Form.Control
                                type="file"
                                id="uploadCV"
                                style={{ display: "none" }}
                                onChange={handleResumeFileChange}
                            />
                        </InputGroup>
                    </Form.Group>
                </div>
            </div>
        </div>
    );
}

export default AdditionalInfoPage;
