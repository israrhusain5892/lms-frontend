import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenImage from "../../assets/images/women.svg";
import ReviewCard from "./ReviewCard";

const DATA = [
    {
        rating: 4,
        reviewTitle: "Great Course",
        reviewText: "The instructor is very knowledgeable and has a good understanding of the subject matter.",
        date: "2019-01-01T00:00:00.000Z",
        name: "Alexandria Novak",
        photo: "https://picsum.photos/200/300",
        id: 1
    },
    {
        rating: 2,
        reviewTitle: "Highly Recommend",
        reviewText: "I learned a lot about Python from this course. Highly recommend!",
        date: "2019-01-01T00:00:00.000Z",
        name: "Alexandria Novak",
        photo: "https://picsum.photos/200/300",
        id: 2
    },
    {
        rating: 5,
        reviewTitle: "Good for Beginners",
        reviewText: "This course is perfect for beginners. The instructor explains concepts clearly.",
        date: "2024-12-26T00:00:00.000Z",
        name: "Alexandria Novak",
        photo: "https://picsum.photos/200/300",
        id: 3
    },
]

function ReviewPage() {
    return (
        <main style={{ backgroundColor: "#FFFFFF", }} className="container">
            <div style={{ backgroundColor: "#FBFCFE", padding: "18px" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="bold" style={{ fontSize: "28px", color: "#1B2128" }}>Python Basics</h1>
                    <div className="d-flex align-items-center">
                        <span className="" style={{ color: "#3D5CFF", marginRight: "4px", fontSize: "16px" }}>★</span>
                        <span className="">4.5</span>
                    </div>
                </div>
                <span className="" style={{ fontSize: "16px", fontWeight: "600", color: "#14202E9E", marginTop: "4px" }}>2023 · 1 · programming</span>
                <p style={{ fontSize: "16px", marginTop: '6px', marginBottom: "0" }}>Learn the basics of Python programming language in this comprehensive course.</p>
            </div>

            <div className="" style={{ padding: "18px", marginTop: "15px", backgroundColor: "#FBFCFE" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="m-0" style={{ fontSize: "24px" }}>User Reviews</h5>
                    <span className="text-primary" role="button">See All</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ fontSize: "48px", fontWeight: "bold", margin: "0", fontFamily: "Poppins", color: "#1B2128" }}>4.5</div>
                    <div style={{}}>
                        <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                            <span style={{ color: "#3D5CFF", fontSize: "20px" }}>★</span>
                        </div>
                        <div style={{ fontSize: "14px", color: "#000000" }}>200</div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', height: '62px' }}>
                    <div className="d-flex align-items-center p-2" style={{ width: "100%", height: "34px" }}>
                        <div className="me-3">
                            <img
                                src={WomenImage}
                                alt="Women-Image"
                                className="rounded-circle"
                                style={{ width: '32px', height: '32px', objectFit: 'cover', marginLeft: "11px" }}
                            />
                        </div>

                        <input style={{ backgroundColor: '#F2F4F7', width: "100%", border: "none", padding: "8px", }} placeholder="Add review" />
                    </div>
                </div>
                {DATA.map((item) => <ReviewCard review={item} key={item.id} />)}

            </div>
        </main>
    );
};

export default ReviewPage;

