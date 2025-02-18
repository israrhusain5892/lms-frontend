import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenImage from "../../assets/images/women.svg";
import ReviewCard from "./ReviewCard";
import { BsFilterLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './review.css';
import { CiFileOn } from "react-icons/ci";
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
        <main style={{ backgroundColor: "#FFFFFF", }} className="containe mt-3">
            <div style={{ backgroundColor: "#FBFCFE" }}>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="font-bold video-title" style={{ fontSize: "28px", color: "#1B2128" }}>Python Basics</h1>
                    <div className="d-flex align-items-center">
                        <span className="" style={{ color: "#3D5CFF", marginRight: "4px", fontSize: "16px" }}>★</span>
                        <span className="">4.5</span>
                    </div>
                </div>
                <span className="" style={{ fontSize: "16px", fontWeight: "600", color: "#14202E9E", marginTop: "4px" }}>01-05-2023 · 1 · programming</span>
                <p style={{ fontSize: "16px", fontWeight: '400', marginTop: '6px', marginBottom: "0", lineHeight: '21px', color: ' #1B2128' }}>Learn the basics of Python programming language in this comprehensive course.</p>
                <div className="para-review mt-4">
                    <p>Hi ! I am Thomas Wayne, your React.js Instructor for this course. Let me tell  you this, i am super happy to help you understand the core basics and advance topics of React.<br></br><br></br>

                        In this course, we will cover basic as well as advance topics, a full-one guide, that will help you understand React  in-depth. This will be a 4 hour course divided in 8 chapters and 36 lessons that includes articles, video lessons as well as assignments to help you test yourself.<br></br><br></br>

                        Lets start now with out getting any further late. lets dive in.</p>
                    <Link className="underline text-primary mt-3 text-[16px] text-sans font-weight-500 d-flex align-items-center gap-1"><CiFileOn className="fs-5" /> Css Integration.pdf</Link>
                </div>
            </div>

            <div className="mt-5" style={{ padding: "", marginTop: "50px", backgroundColor: "#FBFCFE" }}>


                <div className=" text-[]" style={{ display: "flex", alignItems: "center", gap: "40px" }}>
                    {/* <div style={{ fontSize: "48px", fontWeight: "bold", margin: "0", fontFamily: "Poppins", color: "#1B2128" }}>4.5</div> */}

                    <div className="reviewcomment">11,603 Comments</div>
                    <button className="d-flex gap-1 fs-4 sort"><BsFilterLeft className="fs-4" /> <span>Sort By</span></button>

                </div>

                <div className="py-2" style={{ display: 'flex', alignItems: 'center', gap: '15px', width: '100%', }}>
                    <div className="d-flex align-items-center py-2 w-full  " >
                        <div className="d-flex align-items-center">
                            <img
                                src={WomenImage}
                                alt="Women-Image"
                                className="rounded-circle me-3 "
                                style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: "0px" }}
                            />
                        </div>

                        <input className="inputComment d-block" style={{ outline: 'none', padding: "8px", }} placeholder="Add a comment..." />
                    </div>
                </div>
                {DATA.map((item,index) => <ReviewCard review={item} index={index} key={item.id} />)}

            </div>
        </main>
    );
};

export default ReviewPage;

