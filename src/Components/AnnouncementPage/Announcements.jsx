import React from 'react';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import { IoMdStarHalf } from "react-icons/io";
import { IoCheckmarkOutline } from "react-icons/io5";
const Announcements = ({ announcement }) => {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => {
            if (index < Math.floor(rating)) {
                return (
                    <IoMdStar color='#FCD34D' key={index} />
                );

            } else if (index < rating) {
                return (
                    <IoMdStarHalf color='#FCD34D' key={index} />
                );
            } else {
                return (
                    <IoMdStarOutline color='#FCD34D' key={index} />
                );
            }
        });
    };

    return (
        <div className="card  p-4 mb-4 border border-1 rounded-2" >
            <div className="d-flex  justify-content-between align-items-center mb-3">
                <img
                    src={announcement.image}
                    alt="Profile"
                    className="rounded-circle me-3"
                    style={{ width: '40px', height: '40px', marginTop: "16.5" }}
                />
                <div className="flex-grow-1" style={{ paddingLeft: "15px", margintop: "4px" }}>
                    <h5 className="fw-bold" style={{ fontSize: "16px" }}>{announcement.name}</h5>
                    <small>
                        <span style={{ fontSize: "14px", color: "#64748B" }}>{announcement.username}</span> <span style={{ fontSize: "14px", color: "#858597" }}>{announcement.date}</span>
                    </small>
                    <div>{renderStars(announcement.rating)}</div>
                </div>
                <div className="badge d-flex justify-content-between align-items-center" style={{ backgroundColor: "#ECFDF5", borderRadius: "4px", gap: "8px" }}>
                    <IoCheckmarkOutline style={{ color: "#064E3B" }} />
                    <span className="" style={{ color: "#064E3B" }}>Teacher</span>
                </div>
            </div>

            <div className="d-flex flex-column" style={{ color: "#191D23", fontSize: "16px", marginLeft: "71px", }}>
                {announcement.message.split('\n').map((line, index) => (
                    <p key={index} style={{ margin: "0px", lineHeight: "26px" }}>
                        {line}
                    </p>
                ))}
            </div>

        </div >
    );
};

export default Announcements;