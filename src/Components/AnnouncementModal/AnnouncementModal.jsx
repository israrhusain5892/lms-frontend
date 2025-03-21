import React, { useState } from "react";
import "./AnnouncementModal.css";

const AnnouncementModal = ({ show, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [batch, setBatch] = useState("");
    const [author, setAuthor] = useState("Kathy Pacheco");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ title, description, batch, author });

        window.alert("Announcement submitted successfully!");

        setTimeout(() => {
            setTitle("");
            setDescription("");
            setBatch("");
        }, 0);
    };

    return (
        <div className={`modal fade ${show ? "show d-block" : ""}`} tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog" style={{ maxWidth: "931px" }}>
                <div className="modal-content" style={{ border: "none" }}>
                    <div className="modal-header mt-3 position-relative" style={{ border: "none" }}>
                        <h2 className="fw-bold" style={{
                            display: "inline-block",
                            borderBottom: "1px solid ",
                            borderColor: "#D0D0D0",
                            paddingBottom: "10px"
                        }}>Create Announcements</h2>

                        <button
                            type="button"
                            className="btn-close position-absolute top-0 end-0 m-3"
                            onClick={onClose}>
                        </button>
                    </div>

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    id="title"
                                    type="text"
                                    className="form-control mt-2"
                                    placeholder="Enter title here"
                                    value={title}
                                    style={{ height: "54px" }}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mt-4">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    id="description"
                                    className="form-control mt-2"
                                    placeholder="Enter description"
                                    value={description}
                                    style={{ height: "90px" }}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="3"
                                    required
                                ></textarea>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <label htmlFor="batch" className="form-label">Whom to be notified</label>
                                    <select
                                        id="batch"
                                        className="form-select mt-2"
                                        value={batch}
                                        style={{ height: "54px" }}
                                        onChange={(e) => setBatch(e.target.value)}
                                        required
                                    >
                                        <option value="">Select a batch</option>
                                        <option value="Batch 1">Batch 1</option>
                                        <option value="Batch 2">Batch 2</option>
                                        <option value="Batch 3">Batch 3</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="author" className="form-label">Author</label>
                                    <input
                                        id="author"
                                        type="text"
                                        className="form-control mt-2"
                                        value={author}
                                        style={{ height: "54px" }}
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <button type="submit" className="btn btn-primary" style={{ height: "48px", width: "142px" }}>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementModal;

