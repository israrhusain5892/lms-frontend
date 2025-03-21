import React from "react";
import "./AdminCourseCard.css";

const CourseCard = () => {
    const courses = [
        { title: "Introduction to Photography", batch: "Batch 1", students: 30, progress: 95, instructor: "Eleanor Pena", date: "06-01-25", status: "Ongoing" },
        { title: "The Craft of Moment Capture", batch: "Batch 1", students: 30, progress: 95, instructor: "Eleanor Pena", date: "06-01-25", status: "Ongoing" },
        { title: "Exploring Capturing", batch: "Batch 1", students: 30, progress: 95, instructor: "Eleanor Pena", date: "06-01-25", status: "Ongoing" },
        { title: "Exploring the Art of Visual", batch: "Batch 2", students: 30, progress: 88, instructor: "Lucas Harper", date: "07-15-26", status: "Suspended" },
        { title: "The Magic of Narrative", batch: "Batch 2", students: 30, progress: 88, instructor: "Lucas Harper", date: "07-15-26", status: "Completed", expiresOn: "16-09-25" },
        { title: "The Magic of Narrative", batch: "Batch 2", students: 30, progress: 88, instructor: "Lucas Harper", date: "07-15-26", status: "Completed", expiresOn: "16-09-25" },
    ];

    return (
        <div style={{ backgroundColor: "#D9E2FF", padding: "40px" }}>
            <div className="container">
                <h1 className="fw-bold mb-4">Batch Management</h1>
                <div className="row g-4">
                    {courses.map((course, index) => (
                        <div key={index} className="col-lg-4 col-md-6">
                            <div className="card p-3 border-0 rounded-3 d-flex flex-column h-100">
                                <div className="card-body d-flex flex-column gap-2 flex-grow-1">
                                    <h5 className="card-title fw-semibold">{course.title}</h5>
                                    <p className="text-primary fw-medium mb-1">{course.batch}</p>
                                    <p className="text-muted mb-1">Enrolled Students: {course.students}</p>

                                    <div className="progress w-100" style={{ height: "6px" }}>
                                        <div
                                            className="progress-bar bg-dark"
                                            role="progressbar"
                                            style={{ width: `${course.progress}%` }}
                                            aria-valuenow={course.progress}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div>
                                    </div>
                                    <p className="text-muted mt-1">{course.progress}%</p>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="fw-medium text-muted mb-0">{course.instructor}</p>
                                        <p className="fw-medium text-muted mb-0">{course.date}</p>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <div className="d-flex align-items-center bg-light px-3 py-1 rounded-pill text-dark small">
                                            <span
                                                className="d-inline-block me-2 rounded-circle"
                                                style={{
                                                    width: "6px",
                                                    height: "6px",
                                                    backgroundColor: course.status === "Suspended" ? "#FB923C" : course.status === "Completed" ? "#08782D" : "#0d6efd"
                                                }}
                                            ></span>
                                            {course.status}
                                        </div>

                                        {course.status === "Completed" && (
                                            <p className="text-muted mb-0 date-text" style={{ fontSize: "12px" }}>Expires on {course.expiresOn}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseCard;

