import { Table } from "react-bootstrap";
import { FaFolder, FaArrowUp } from "react-icons/fa6";
import { MdOutlineStarOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import './FolderPage.css'

const FolderData = ({ filteredFolders = [] }) => {
    return (
        <Table responsive className="bg-white table1 mx-auto w-full">
            <thead>
                <tr className="d">
                    <th
                        className="d-flex align-items-center md:pl-[48px]"
                        style={{ paddingBottom: "36px"}}
                    >
                        Name
                        <FaArrowUp />
                    </th>
                    <th style={{ paddingBottom: "36px" }}></th>
                    <th  className=" " style={{ paddingBottom: "36px" }}>
                        Modified
                    </th>
                    <th className="" style={{ paddingBottom: "36px" }}>
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
                        <tr key={index} className="md:py-2  py-1">
                           
                            <td className=" cursor " >
                               <div>
                               <Link  to={"/material/1"} className="d-flex align-items-center md:gap-2">
                              
                               <FaFolder className="folde d-block" style={{ color: "#A1C9F7" }} />
                              
                               
                                <span className="">
                                    {folder.name}
                                </span>
                                </Link>
                                </div>
                                
                            </td>
                          
                            <td className="md:pl-0 pl-[4px] w-[40px]">
                                <MdOutlineStarOutline
                                    style={{ color: "#524A3E66" }}
                                />
                            </td>
                            <td>{folder.date}</td>
                            <td className="">{folder.visibility}</td>
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

