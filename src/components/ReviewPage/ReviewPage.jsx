import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenImage from "../../assets/images/women.svg";

function ReviewPage() {
    return (
        <>
            <div style={{ height: "151px", width: "1336px", gap: "4px", marginLeft: "48px", backgroundColor: "#FBFCFE" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="mt-5 bold" style={{ fontSize: "28px", color: "#1B2128" }}>Python Basics</h1>
                    <div className="d-flex align-items-center">
                        <span className="me-2 mt-5" style={{ color: "#3D5CFF" }}>★</span>
                        <span className="mt-5">4.5</span>
                    </div>
                </div>
                <span className=" mt-0 bold" style={{ fontSize: "16px", color: "#14202E9E" }}>2023·1·programming</span>
                <div>
                    <p style={{ fontSize: "16px" }}>Learn the basics of Python programming language in this comprehensive course.</p>
                </div>
            </div>

            <div className="mt-3" style={{ height: "610px", width: "1336px", marginLeft: "48px", backgroundColor: "#FBFCFE" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0" style={{ fontSize: "24px" }}>User Reviews</h5>
                    <span className="text-primary" role="button">See All</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ fontSize: "48px", fontWeight: "bold", margin: "0", fontFamily: "Poppins", color: "#1B2128" }}>4.5</div>
                    <div style={{ textAlign: "center" }}>
                        <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                        </div>
                        <div style={{ fontSize: "14px", color: "#000000", marginLeft: "2px", }}>200</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', height: '62px' }}>
                    <div className="d-flex align-items-center p-2" style={{ width: "100%", height: "34px" }}>
                        {/* Left Rounded Image */}
                        <div className="me-3">
                            <img
                                src={WomenImage}
                                alt="Women-Image"
                                className="rounded-circle"
                                style={{ width: '32px', height: '32px', objectFit: 'cover', marginLeft: "11px" }}
                            />
                        </div>
                        {/* Add Review Section */}
                        <div style={{ flex: 1, backgroundColor: '#F2F4F7', height: '34px', display: 'flex', alignItems: 'center' }}>
                            <h5 className="mb-0" style={{ fontSize: "12px" }}>Add Review</h5>
                        </div>
                    </div>
                </div>
                <hr />

                {/* Reviews */}
                <div className="card mb-3 border-0" style={{ height: "124px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold mb-2 mt-4 " style={{ fontSize: "16px" }}>Great Course</h4>
                        <span style={{ color: "#3D5CFF" }}>★<span style={{ color: "#1B2128" }}> 5 star</span></span>

                    </div>
                    <p className="mb-3" style={{ color: "#14202E9E", fontSize: "14px" }}>This course is very informative and easy to follow.</p>
                    <div className="d-flex align-items-center">
                        <img
                            src={WomenImage}
                            alt="Alexandria Novak"
                            className="rounded-circle me-3"
                            style={{ width: "16px", height: "16px", objectFit: "cover" }}
                        />
                        <div>
                            <h6 className="mb-0" style={{ fontSize: "14px" }}>Alexandria Novak · 2 days ago</h6>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="card mb-3 border-0 " style={{ height: "124px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold mb-2 mt-4" style={{ fontSize: "16px" }}>Highly Recommend</h4>
                        <span style={{ color: "#3D5CFF" }}>★<span style={{ color: "#1B2128" }}> 4.5 star</span></span>
                    </div>
                    <p className="mb-3" style={{ color: "#14202E9E", fontSize: "14px" }}>I learned a lot about Python from this course. Highly recommend!</p>
                    <div className="d-flex align-items-center">
                        <img
                            src={WomenImage}
                            alt="Alexandria Novak"
                            className="rounded-circle me-3"
                            style={{ width: "16px", height: "16px", objectFit: "cover" }}
                        />
                        <div>
                            <h6 className="mb-0" style={{ fontSize: "14px" }}>Benedict Cumberbatch · 1 week ago</h6>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="card mb-3 border-0" style={{ height: "127px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold mb-2 mt-4" style={{ fontSize: "16px" }}>Good for Beginners</h4>
                        <span style={{ color: "#3D5CFF" }}>★ <span style={{ color: "#1B2128" }}> 4 star</span></span>
                    </div>
                    <p className="mb-3" style={{ color: "#14202E9E", fontSize: "14px" }}>
                        This course is perfect for beginners. The instructor explains concepts clearly.
                    </p>
                    <div className="d-flex align-items-center">
                        <img
                            src={WomenImage}
                            alt="Alexandria Novak"
                            className="rounded-circle me-3"
                            style={{ width: "16px", height: "16px", objectFit: "cover" }}
                        />
                        <div>
                            <h6 className="mb-0" style={{ fontSize: "14px" }}>Cassandra Clare · 3 weeks ago</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ReviewPage;

