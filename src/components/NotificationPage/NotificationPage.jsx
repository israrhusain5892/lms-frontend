import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import Notifications from './Notifications';

const NotificationPage = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-5 py-3">

                <div className="d-flex align-items-center">
                    <FaChevronLeft className="me-3" style={{ height: "22.5px" }} />
                    <span className='fw-bold' style={{ fontSize: "30px", marginLeft: "23px" }}>Notifications</span>
                </div>

                <div
                    style={{
                        border: "1px solid #3D5CFF",
                        backgroundColor: "#EEF2FF",
                        borderRadius: "4px",
                        padding: "12px 32.5px",
                        color: "#3D5CFF",
                        fontSize: "16px",
                    }}
                >
                    Sort by
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center" style={{ marginLeft: "112px", marginRight: "115px", padding: '24px', margintop: "36px" }}>
                <div className="fw-bold" style={{ fontSize: "24px" }}>Recent Notifications</div>
                <div>
                    <span style={{ fontSize: "16px" }}>View All</span>
                </div>
            </div>

            <Notifications />

        </>
    )
}

export default NotificationPage;