import React, { useState } from "react";
import { Button } from "react-bootstrap";
import uploadicon from "./../../assets/icons/uploadicon.svg";
import "./TaskUploadForm.css";

const TaskUploadForm = () => {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [uploadError, setUploadError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!videoFile) {
            setUploadError(true);
            return;
        }

        console.log({
            date,
            title,
            description,
            videoFile,
        });

        alert("Task Successfully submitted!");

        setTimeout(() => {
            setDate('');
            setTitle('');
            setDescription('');
            setVideoFile(null);
            setUploadError(false);
        }, 500);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoFile(file);
            setUploadError(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="task-heading">Task</h2>
            <form onSubmit={handleSubmit}>

                <div className="mt-4">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                        id="date"
                        type="date"
                        className="form-control mt-2"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        id="title"
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter course name"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        className="form-control mt-2"
                        placeholder="Enter course description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        required
                    ></textarea>
                </div>

                <div className="mt-4 position-relative">
                    <label htmlFor="videoFileInput" className="form-label">Upload File</label>
                    <input
                        type="text"
                        className={`form-control mt-2 ${uploadError ? "is-invalid" : ""}`}
                        placeholder="Upload Video files here"
                        value={videoFile ? videoFile.name : ''}
                        readOnly
                        required
                    />

                    <img
                        src={uploadicon}
                        alt="Upload"
                        className="upload-icon"
                        onClick={() => document.getElementById("videoFileInput").click()}
                    />

                    <input
                        type="file"
                        id="videoFileInput"
                        style={{ display: "none" }}
                        accept="video/*"
                        onChange={handleFileChange}
                    />

                    {uploadError && <div className="invalid-feedback d-block">Please upload a file.</div>}
                </div>

                <div className="mt-5 d-flex gap-3">
                    <Button
                        type="submit"
                        className="btn text-white"
                        style={{ backgroundColor: "#3B76F6", border: "none" }}
                    >
                        Submit
                    </Button>

                    <Button
                        className="btn border border-1 border-primary"
                        style={{ backgroundColor: "#DBE8FE", color: "#3B76F6" }}
                    >
                        Add
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default TaskUploadForm;

