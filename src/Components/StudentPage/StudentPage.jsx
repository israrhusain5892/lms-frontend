import React, { useState } from 'react';
import AdditionalInfoPage from './AdditionalInfoPage';
import AcademicPage from './AcademicPage';
import ButtonPage from './ButtonPage';
import "./StudentPage.css";

const StudentPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        traineeId: '',
        gender: '',
        dob: '',
        city: '',
        address: '',
        state: '',
        pinCode: '',
        country: '',
        phoneNumber: '',
        email: '',
        collegeName: '',
        stream: '',
        yearOfCompletion: '',
        stateAcademic: '',
        profileFileName: '',
        resumeFileName: ''
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const validate = () => {
        let tempErrors = {};

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email && !emailPattern.test(formData.email)) {
            tempErrors.email = 'Please enter a valid email';
        }

        if (!formData.profileFileName) {
            tempErrors.profileFileName = 'Profile Picture is required';
        }
        if (!formData.resumeFileName) {
            tempErrors.resumeFileName = 'Resume is required';
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form Data:', formData);

            window.alert("Form Submitted Successfully!");

            setFormData({
                fullName: '',
                traineeId: '',
                gender: '',
                dob: '',
                city: '',
                address: '',
                state: '',
                pinCode: '',
                country: '',
                phoneNumber: '',
                email: '',
                collegeName: '',
                stream: '',
                yearOfCompletion: '',
                stateAcademic: '',
                profileFileName: '',
                resumeFileName: ''
            });

            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };


    return (
        <form onSubmit={handleSubmit} >
            <div>
                <h3 className='fw-bold heading' style={{ fontSize: "28px", color: "#2556EB", marginTop: "45px" }}>Create Student Account</h3>
                <h5 className='fw-bold heading' style={{
                    fontSize: "22px", marginTop: "46px", display: "inline-block",
                    borderBottom: "2px solid ",
                    borderColor: "#D0D0D0",
                    paddingBottom: "10px"
                }}>Personal Information</h5>
            </div>

            <div className="form-row row" style={{ marginTop: "32px" }}>
                <div className="col-12 col-md-6">
                    <label htmlFor="fullName" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Full Name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <label htmlFor="traineeId" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Trainee Id</label>
                    <input
                        type="text"
                        className={`form-control ${errors.traineeId ? 'is-invalid' : ''}`}
                        id="traineeId"
                        placeholder="Enter Trainee Id"
                        value={formData.traineeId}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                </div>
            </div>

            <div className="form-row row" style={{ marginTop: "32px" }}>
                <div className="col-12 col-md-6">
                    <label htmlFor="gender" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Gender</label>
                    <select
                        className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}>
                        <option value="" disabled>Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="col-12 col-md-6">
                    <label htmlFor="dob" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Date of Birth</label> <br />
                    <input
                        type="date"
                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                        id="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                </div>
            </div>

            <div className="form-row row" style={{ marginTop: "32px" }}>
                <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label fw-semibold label-custom" style={{ fontSize: "18px" }}>Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ height: "54px", marginTop: "13px" }}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
            </div>

            <AcademicPage
                formData={formData}
                setFormData={setFormData}
            />

            <AdditionalInfoPage
                formData={formData}
                setFormData={setFormData}
                errors={errors}
            />
            <ButtonPage />
        </form>
    );
};

export default StudentPage;
