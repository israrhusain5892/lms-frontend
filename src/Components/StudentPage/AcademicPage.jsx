import React from 'react';

const AcademicPage = ({ formData, setFormData }) => {
    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <div >
            <h2 className="fw-bold heading" style={{ fontSize: "22px", marginTop: "32px" }}>Academic Information</h2>

            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="collegeName" className="form-label fw-semibold label-custom" style={{ fontSize: "18px", marginTop: "32px" }}>College Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="collegeName"
                        placeholder="Enter College Name"
                        value={formData.collegeName}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="stream" className="form-label fw-semibold label-custom" style={{ fontSize: "18px", marginTop: "32px" }}>Stream</label>
                    <input
                        type="text"
                        className="form-control"
                        id="stream"
                        placeholder="Enter Stream"
                        value={formData.stream}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="yearOfCompletion" className="form-label fw-semibold label-custom" style={{ fontSize: "18px", marginTop: "32px" }}>Year of Completion</label>
                    <input
                        type="number"
                        className="form-control"
                        id="yearOfCompletion"
                        placeholder="Enter Year of Completion"
                        value={formData.yearOfCompletion}
                        onChange={handleChange}
                        required
                        style={{
                            height: "54px",
                            marginTop: "13px"
                        }}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="state" className="form-label fw-semibold label-custom" style={{ fontSize: "18px", marginTop: "32px" }}>State</label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        placeholder="Enter State"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AcademicPage;

