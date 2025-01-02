import { useState } from "react";
import courseMaterialsData from "../../utils/courseMaterials/courseMaterials.json";
import "./coursedetails.css";
import Details from "./Courses";
import pdf from "../../assets/images/pdf.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CourseDetails = () => {
  const [openMaterial, setOpenMaterial] = useState(null);

  const handleToggle = (id) => {
    setOpenMaterial((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-6 lg:w-[850px] ">
      <nav className="text-md text-[#555] mb-4">
        Home &gt; Reading &gt; Material
      </nav>

      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Data Structure & Algorithms</h1>
      </header>

      <section className="mb-4 flex justify-between items-center">
        <a href="#" className="flex items-center text-[#555] hover:underline">
          <img src={pdf} alt="PDF Icon" className="w-10 h-10 mr-2" />
          Frame Works and Algorithms.pdf
        </a>
        <button className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-[#3D5CFF] rounded border-2 border-[#3D5CFF]">
          Download File
        </button>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold mb-4 text-[#3D3D3D]">
          Course Materials
        </h2>
        <ul className="space-y-2">
          {courseMaterialsData.map((material) => (
            <li key={material.id}>
              <div
                className="flex justify-between items-center px-4 py-2 bg-gray-50 border-b border-[#5555552f] rounded cursor-pointer hover:bg-gray-200"
                onClick={() => handleToggle(material.id)}
              >
                <span className="flex items-center">
                  <i className={`${material.icon} mr-2`}></i>
                  {material.title}
                </span>
                <span>
                  {openMaterial === material.id ? (
                    <i className="fa-solid fa-chevron-up"></i>
                  ) : (
                    <i className="fa-solid fa-chevron-down"></i>
                  )}
                </span>
              </div>
              {openMaterial === material.id &&
                (material.title === "HTML and CSS Basics" ? (
                  <Details />
                ) : (
                  <div className="p-4 bg-gray-50 border border-gray-200">
                    <p className="text-gray-600 text-sm">
                      Content for {material.title} will be displayed here.
                    </p>
                  </div>
                ))}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CourseDetails;
