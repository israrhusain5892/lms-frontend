import { Table } from "react-bootstrap";
import { FaFolder, FaArrowUp } from "react-icons/fa6";
import { MdOutlineStarOutline } from "react-icons/md";

const FolderData = ({ filteredFolders = [] }) => {
    return (
        <Table responsive>
            <thead>
                <tr>
                    <th
                        className="d-flex align-items-center"
                        style={{ paddingBottom: "36px", paddingLeft: "48px" }}
                    >
                        <strong>Name</strong>
                        <FaArrowUp />
                    </th>
                    <th style={{ paddingBottom: "36px" }}></th>
                    <th style={{ paddingBottom: "36px" }}>
                        <strong>Modified</strong>
                    </th>
                    <th style={{ paddingBottom: "36px" }}>
                        <strong>Who can access</strong>
                    </th>
                </tr>
            </thead>

            <tbody
                style={{
                    fontSize: "18px",
                    color: "#1E1919",
                }}
            >
                {filteredFolders.length > 0 &&
                    filteredFolders?.map((folder, index) => (
                        <tr key={index}>
                            <td style={{ paddingLeft: "48px" }}>
                                <FaFolder style={{ color: "#A1C9F7" }} />
                                <span className="" style={{ paddingLeft: "8px" }}>
                                    {folder.name}
                                </span>
                            </td>
                            <td>
                                <MdOutlineStarOutline
                                    style={{ color: "#524A3E66" }}
                                />
                            </td>
                            <td>{folder.date}</td>
                            <td>{folder.visibility}</td>
                        </tr>
                    ))}

                {filteredFolders.length === 0 && (
                    <tr>
                        <td className="text-center border-0" colSpan={4}>
                            No folders found.
                        </td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
};

export default FolderData;

