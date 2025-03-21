import React, { useState } from "react";
import { Button } from "react-bootstrap";
import uploadicon from "./../../assets/icons/uploadicon.svg";
import "./ArticleUploadForm.css";

const ArticleUploadForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [pdfError, setPdfError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!imageFile) {
            setImageError(true);
            return;
        }
        if (!pdfFile) {
            setPdfError(true);
            return;
        }

        console.log({
            title,
            description,
            imageFile,
            pdfFile,
        });

        alert("Article Successfully submitted!");

        setTimeout(() => {
            setTitle('');
            setDescription('');
            setImageFile(null);
            setPdfFile(null);
            setImageError(false);
            setPdfError(false);
        }, 500);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageError(false);
        }
    };

    const handlePdfChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPdfFile(file);
            setPdfError(false);
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="task-heading">Article</h2>
            <form onSubmit={handleSubmit}>

                <div className="mt-4">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        id="title"
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter article title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                {/* Upload Image */}
                <div className="mt-4 position-relative">
                    <label className="form-label">Upload Image</label>
                    <input
                        type="text"
                        className={`form-control mt-2 ${imageError ? "is-invalid" : ""}`}
                        placeholder="Upload Image"
                        value={imageFile ? imageFile.name : ''}
                        readOnly
                        required
                    />
                    <img
                        src={uploadicon}
                        alt="Upload"
                        className="upload-icon"
                        onClick={() => document.getElementById("imageFileInput").click()}
                    />
                    <input
                        type="file"
                        id="imageFileInput"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {imageError && <div className="invalid-feedback d-block">Please upload an image file.</div>}
                </div>

                <div className="mt-4 position-relative">
                    <label className="form-label">Upload Pdf</label>
                    <input
                        type="text"
                        className={`form-control mt-2 ${pdfError ? "is-invalid" : ""}`}
                        placeholder="Upload Pdf files here"
                        value={pdfFile ? pdfFile.name : ''}
                        readOnly
                        required
                    />
                    <img
                        src={uploadicon}
                        alt="Upload"
                        className="upload-icon"
                        onClick={() => document.getElementById("pdfFileInput").click()}
                    />
                    <input
                        type="file"
                        id="pdfFileInput"
                        style={{ display: "none" }}
                        accept="application/pdf"
                        onChange={handlePdfChange}
                    />
                    {pdfError && <div className="invalid-feedback d-block">Please upload a pdf file.</div>}
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

export default ArticleUploadForm;


