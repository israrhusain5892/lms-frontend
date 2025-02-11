import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dayjs from "dayjs";
import UserIcon from "../../assets/icons/user.svg";
import "./Notifications.css";

const notificationsData = [
    {
        id: 1,
        title: "Robert Fox is coming to your selected place for the session",
        sender: "Patricia Sanders",
        timestamp: "2024-11-30T00:16:00",
        status: "OPEN",
    },
    {
        id: 2,
        title: "Your live session with Robert Fox starts in 30 minutes. Get ready!",
        sender: "Iva Ryan",
        timestamp: "2024-12-13T16:26:00",
        status: "OPEN",
    },
    {
        id: 3,
        title: "Your session with Robert Fox on 01 Jul, 12:00 - 1:00 has been cancelled",
        sender: "Rodger Struck",
        timestamp: "2024-11-26T22:54:00",
        status: "OPEN",
    },
    {
        id: 4,
        title: "You have successfully purchased the course Problem solving strategies. Start learning now.",
        sender: "Judith Rodriguez",
        timestamp: "2024-12-13T13:39:00",
        status: "OPEN",
    },
    {
        id: 5,
        title: "Special Offer! Get 20% off on Problem solving strategies. Limited time only!",
        sender: "Jerry Helfer",
        timestamp: "2024-12-01T15:27:00",
        status: "OPEN",
    },
];

const formatDate = (timestamp) => {
    return dayjs(timestamp).format("MMM DD, YYYY h:mm a");
};

const Notifications = () => {
    return (
        <div className="container ">
            <div>
                {notificationsData.map((notification) => (
                    <div key={notification.id} className="d-flex justify-content-between align-items-center  border-bottom border-1 p-3">

                        <div className="d-flex justify-content-between align-items-center">
                            <div style={{ borderRadius: "12px", backgroundColor: "#EEF2FF", padding: "10px" }}>
                                <img
                                    src={UserIcon}
                                    alt="Notification Icon"
                                    style={{ width: "24px", height: "24px", }}
                                />
                            </div>

                            <div style={{ marginLeft: "16px" }}>
                                <h6 className="mb-1" style={{ fontsize: "18px" }}>{notification.title}</h6>
                                <small style={{ fontsize: "16px", color: "#7E92A2" }}>{notification.sender}</small>
                            </div>
                        </div>

                        <div className="text-end">
                            <span className="badge pt-1 pr-3 pb-1 pl-3" style={{ borderRadius: "100px", backgroundColor: "#EEF2FF", color: "#3D5CFF", fontsize: "12px", }}>{notification.status}</span>
                            <br />
                            <small className="" style={{ color: "#7E92A2", fontsize: "16px", }}>{formatDate(notification.timestamp)}</small>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-center mt-4">
                <button
                    className="btn border border-1 fw-bold"
                    style={{
                        padding: "10px 24px",
                        borderColor: "#FFFFFF",
                        borderRadius: "70px",
                        color: "#061B2E",
                        fontSize: "18px",
                    }}
                >
                    Load More
                </button>
            </div>

        </div >
    );
};

export default Notifications;

