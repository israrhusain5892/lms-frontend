import React from 'react';
import { Button } from "react-bootstrap";
import "./StudentPage.css";

const ButtonPage = () => {

    return (
        <div style={{ marginTop: "32px" }}>
            <div className="d-flex gap-3">
                <Button
                    type="submit"
                    className="fw-bold text-white btn-custom"
                    style={{ width: "142px", height: "56px", backgroundColor: "#3B76F6", border: "none", fontSize: "20px" }}
                >
                    Create
                </Button>

                <Button
                    className="fw-bold btn-custom"
                    style={{ width: "142px", height: "56px", backgroundColor: "#DCDCDC", color: "#1E1E1E", border: "none", fontSize: "20px" }}
                >
                    Edit
                </Button>
            </div>
        </div>
    );
};

export default ButtonPage;
