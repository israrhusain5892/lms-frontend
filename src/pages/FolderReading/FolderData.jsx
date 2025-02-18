import { Table } from "react-bootstrap";
import { FaFolder, FaArrowUp } from "react-icons/fa6";
import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import './FolderPage.css'

const FolderData = ({ filteredFolders = [] }) => {
    return (
        <Table responsive className="bg-white table1">
            <thead>
                <tr>
                    <th
                        className="d-flex align-items-center"
                        style={{ paddingBottom: "36px", paddingLeft: "48px" }}
                    >
                        Name
                        <FaArrowUp />
                    </th>
                    <th style={{ paddingBottom: "36px" }}></th>
                    <th style={{ paddingBottom: "36px" }}>
                        Modified
                    </th>
                    <th style={{ paddingBottom: "36px" }}>
                        Who can access
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
                        <tr key={index} className="py-2 ">
                           
                            <td className="d-flex align-items-center cursor md:pl-[48px] pl-0" >
                               
                               <Link to={"/material/1"} className="d-flex align-items-center">
                              
                                <FaFolder style={{ color: "#A1C9F7" }} />
                                <span className="md:pl-[8px] pl-0">
                                    {folder.name}
                                </span>
                                </Link>
                                
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

