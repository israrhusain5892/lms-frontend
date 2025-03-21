import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "./BatchPage.css";

const BatchPage = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        course: '',
        batchName: '',
        batchStartDate: '',
        batchCode: '',
        trainers: '',
        students: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = Object.values(formData).every(field => field.trim() !== '');

        if (isFormValid) {
            console.log('Saved Data:', formData);
            alert('Data saved successfully!');
            setFormData({
                course: '',
                batchName: '',
                batchStartDate: '',
                batchCode: '',
                trainers: '',
                students: ''
            });
        } else {
            alert('Please fill out all fields.');
        }
    };

    const selectWrapperStyle = {
        position: "relative"
    };

    const selectStyle = {
        height: "54px",
        marginTop: "13px",
        appearance: "none",
        paddingRight: "35px"
    };

    const arrowStyle = {
        position: "absolute",
        top: "70%",
        right: "15px",
        pointerEvents: "none",
        transform: "translateY(-50%)",
        fontSize: "24px",
        color: "#6c757d"
    };

    return (
        <div style={{ backgroundColor: "#FFFFFF" }}>
            <h2 className="heading" style={{ fontSize: "28px", marginTop: "40px", color: "#2556EB" }}>Create Batch</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row row" style={{ marginTop: "50px" }}>
                    <div className="col-12 col-md-6" style={selectWrapperStyle}>
                        <label htmlFor="course" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Select Course</label>
                        <select
                            className="form-control"
                            id="course"
                            value={formData.course}
                            onChange={handleChange}
                            required
                            style={selectStyle}
                            aria-label="Select Course">
                            <option value="">Select class</option>
                            <option value="course1">Course 1</option>
                            <option value="course2">Course 2</option>
                            <option value="course3">Course 3</option>
                        </select>
                        <MdOutlineKeyboardArrowDown style={arrowStyle} />
                    </div>

                    <div className="col-12 col-md-6 fw-semibold">
                        <label htmlFor="batchName" className="form-label  label-custom" style={{ fontSize: "18px" }}>Batch Name</label>
                        <input
                            type="text"
                            id="batchName"
                            placeholder='Select Batch name'
                            value={formData.batchName}
                            onChange={handleChange}
                            required
                            className="form-control"
                            style={{ height: "54px", marginTop: "13px", fontFamily: "'Manrope', sans-serif" }}
                            aria-label="Add Batch name"
                        />
                    </div>
                </div>

                <div className="form-row row" style={{ marginTop: "32px" }}>
                    <div className="col-12 col-md-6">
                        <label htmlFor="batchStartDate" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Batch Start Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="batchStartDate"
                            value={formData.batchStartDate}
                            onChange={handleChange}
                            required
                            style={{ height: "54px", marginTop: "13px", fontFamily: "'Manrope', sans-serif" }}
                            aria-label="Batch Start Date"
                        />
                    </div>
                    <div className="col-12 col-md-6">
                        <label htmlFor="batchCode" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Batch Code</label>
                        <input
                            type="text"
                            id="batchCode"
                            placeholder='Add batch code'
                            value={formData.batchCode}
                            onChange={handleChange}
                            required
                            className="form-control"
                            style={{ height: "54px", marginTop: "13px", fontFamily: "'Manrope', sans-serif" }}
                            aria-label="Add Batch Code"
                        />
                    </div>
                </div>

                <div className="form-row row" style={{ marginTop: "32px" }}>
                    <div className="col-12 col-md-6" style={selectWrapperStyle}>
                        <label htmlFor="trainers" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Add Trainers</label>
                        <select
                            className="form-control"
                            id="trainers"
                            value={formData.trainers}
                            onChange={handleChange}
                            required
                            style={selectStyle}
                            aria-label="Select Trainers">
                            <option value="">Select Trainers</option>
                            <option value="trainer1">Trainer 1</option>
                            <option value="trainer2">Trainer 2</option>
                            <option value="trainer3">Trainer 3</option>
                        </select>
                        <MdOutlineKeyboardArrowDown style={arrowStyle} />
                    </div>

                    <div className="col-12 col-md-6" style={selectWrapperStyle}>
                        <label htmlFor="students" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Add Students</label>
                        <select
                            className="form-control"
                            id="students"
                            value={formData.students}
                            onChange={handleChange}
                            required
                            style={selectStyle}
                            aria-label="Select Students"
                        >
                            <option value="">Select Students</option>
                            <option value="student1">Student 1</option>
                            <option value="student2">Student 2</option>
                            <option value="student3">Student 3</option>
                        </select>
                        <MdOutlineKeyboardArrowDown style={arrowStyle} />
                    </div>
                </div>

                <div style={{ marginTop: "48px" }}>
                    <div className="d-flex gap-3">
                        <Button
                            type="submit"
                            className="fw-bold text-white btn-custom"
                            style={{ width: "142px", height: "52px", backgroundColor: "#3B76F6", border: "none", fontSize: "16px" }}
                        >
                            Save
                        </Button>

                        <Button
                            type="button"
                            className="fw-bold btn-custom"
                            style={{ width: "142px", height: "52px", backgroundColor: "#DCDCDC", color: "#1E1E1E", border: "none", fontSize: "16px" }}
                            onClick={() => setFormData({
                                course: '',
                                batchName: '',
                                batchStartDate: '',
                                batchCode: '',
                                trainers: '',
                                students: ''
                            })}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BatchPage;
