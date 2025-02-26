import React from 'react';
import VectorIcon from "../../assets/icons/Vector.svg";
import AvatarImage from "../../assets/images/avatar.svg";
import BellIcon from "../../assets/icons/Icon.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center' style={{ backgroundColor: "#D9E2FF", width: "100%" }}>
            <div className='d-flex align-items-center'>
                <h1 className="fw-semibold header" style={{ fontSize: "34px" }}>Hello Ibrahim</h1>
                <img src={VectorIcon} alt="Greeting Icon" style={{ height: "32px", width: "32px", marginLeft: "9px" }} />
            </div>
            <div className='d-flex align-items-center'>
                <img src={AvatarImage} alt="Avatar" style={{ height: "40px", width: "40px" }} />
                <img src={BellIcon} alt="Notification Bell" style={{ height: "40px", width: "48px" }} />
            </div>
        </div>
    )
}

export default Header;
