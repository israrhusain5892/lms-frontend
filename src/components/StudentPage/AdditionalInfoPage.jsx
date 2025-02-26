import React from "react";
import { FaUpload } from "react-icons/fa";
import "./StudentPage.css";

function AdditionalInfoPage({ formData, setFormData, errors }) {

    // Handle Profile Picture Change
    const handleProfileFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, profileFileName: file.name });
        } else {
            setFormData({ ...formData, profileFileName: "" });
        }
    };

    // Handle Resume Change
    const handleResumeFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFormData({ ...formData, resumeFileName: file.name });
        } else {
            setFormData({ ...formData, resumeFileName: "" });
        }
    };

    return (
        <div>
            <h2 className="fw-bold heading" style={{ fontSize: "22px", marginTop: "85px" }}>Additional Information</h2>

            <div className="row " style={{ marginTop: "32px" }}>
                {/* Profile Picture Upload */}
                <div className="col-md-6 position-relative">
                    <label htmlFor="uploadProfile" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Profile Picture</label>
                    <input
                        type="text"
                        className={`form-control ${errors.profileFileName ? 'is-invalid' : ''}`}
                        placeholder="Upload your profile"
                        value={formData.profileFileName}
                        readOnly
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                    {errors.profileFileName && <div className="invalid-feedback">{errors.profileFileName}</div>}
                    <FaUpload
                        style={{
                            position: "absolute",
                            right: "15px",
                            top: "70%",
                            transform: "translateY(-50%)",
                            cursor: "pointer"
                        }}
                        onClick={() => document.getElementById("uploadProfile").click()}
                        aria-label="Upload Profile Picture"
                    />
                    <input
                        type="file"
                        id="uploadProfile"
                        style={{ display: "none" }}
                        onChange={handleProfileFileChange}
                    />
                </div>

                {/* Resume Upload */}
                <div className="col-md-6  position-relative">
                    <label htmlFor="uploadCV" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Resume</label>
                    <input
                        type="text"
                        className={`form-control ${errors.resumeFileName ? 'is-invalid' : ''}`}
                        placeholder="Upload your CV here"
                        value={formData.resumeFileName}
                        readOnly
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                    {errors.resumeFileName && <div className="invalid-feedback">{errors.resumeFileName}</div>}
                    <FaUpload
                        style={{
                            position: "absolute",
                            right: "15px",
                            top: "70%",
                            transform: "translateY(-50%)",
                            cursor: "pointer"
                        }}
                        onClick={() => document.getElementById("uploadCV").click()}
                        aria-label="Upload Resume"
                    />
                    <input
                        type="file"
                        id="uploadCV"
                        style={{ display: "none" }}
                        onChange={handleResumeFileChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdditionalInfoPage;

