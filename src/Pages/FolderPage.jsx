import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb } from "react-bootstrap";
import FolderData from "./FolderData";
import { FaSearch } from "react-icons/fa";
import "./FolderPage.css";

const folderList = [
    { name: "Goa memories", date: "26/11/2019 8:02 pm", visibility: "Only you" },
    {
        name: "Introduction to Taxation 101",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Fundamentals of Taxation",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Tax Basics 101",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Income tax filing (AY 2021)",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Income tax filing (AY 2021)",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Income tax filing (AY 2021)",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Income tax filing (AY 2021)",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Income tax filing (AY 2021)",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
    {
        name: "Income tax filing (AY 2021)",
        date: "26/11/2019 8:02 pm",
        visibility: "Only you",
    },
];

const FolderPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFolders = folderList.filter(
        (folder) =>
            folder.name
                .toLowerCase()
                .replace(/[^a-z0-9]/gi, "")
                .includes(searchTerm.toLowerCase().replace(/[^a-z0-9]/gi, "")) ||
            folder.date
                .toLowerCase()
                .replace(/[^a-z0-9]/gi, "")
                .includes(searchTerm.toLowerCase().replace(/[^a-z0-9]/gi, "")) ||
            folder.visibility
                .toLowerCase()
                .replace(/[^a-z0-9]/gi, "")
                .includes(searchTerm.toLowerCase().replace(/[^a-z0-9]/gi, ""))
    );
    return (
        <>
            <div className="d-flex justify-content-between align-items-center ">
                <h1 style={{ fontSize: "30px", color: "#000000", marginTop: "43px" }}>
                    Data Structure & Algorithms
                </h1>
                <div style={{ maxWidth: "400px", position: "relative" }}>
                    <FaSearch
                        className="text-primary"
                        style={{
                            position: "absolute",
                            left: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            color: "#3D5CFF",
                        }}
                    />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            fontSize: "14px",
                            borderColor: "#3D5CFF",
                            color: "#9CA0B2",
                            paddingLeft: "35px",
                        }}
                    />
                </div>
            </div>
            <Breadcrumb className="custom-breadcrumb" style={{ margintop: "24px" }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Video</Breadcrumb.Item>
                <Breadcrumb.Item active>Folder 2</Breadcrumb.Item>
            </Breadcrumb>

            <FolderData filteredFolders={filteredFolders} />
        </>
    );
};

export default FolderPage;
