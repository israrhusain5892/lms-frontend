import { Link } from "react-router-dom";
import {  FaRegPlayCircle,FaDownload  , FaYoutube, FaLink } from "react-icons/fa";
import courseMaterialsData from "../../utils/courseMaterials/courseMaterials.json";
import pdf from "../../assets/images/pdf.png";
import { FiFileText } from "react-icons/fi";
import StudentDashboardLayout from "../../layouts/StudentDashboardLayout";

const iconMap = {
  "fas fa-file-alt": <FiFileText className="text-xl mr-2" />,
  "fa-regular fa-circle-play": <FaRegPlayCircle  className=" text-xl mr-2" />,
  "fa-brands fa-youtube": <FaYoutube className="text-red-500 text-xl mr-2" />,
  "fas fa-link": <FaLink className="mr-2 text-gray-400 text-lg" />,
};

const CourseMaterial = () => {
  return (
    <StudentDashboardLayout>
    <div className="p-6 lg:w-[850px]">
      <nav className="text-md text-[#555] mb-4">Home &gt; Reading &gt; Material</nav>

      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Data Structure & Algorithms</h1>
      </header>

      <section className="mb-4 pb-5 border-b-2 border-gray-200  flex justify-between items-center">
        <a href="#" className="flex items-center text-[#555] hover:underline">
          <img src={pdf} alt="PDF Icon" className="w-10 h-10 mr-2" />
          Frame Works and Algorithms.pdf
        </a>
        <button className="px-4 py-2 hidden md:block bg-blue-50 hover:bg-blue-100 text-[#3D5CFF] rounded border-2 border-[#3D5CFF]">
          Download File
        </button>
        <FaDownload className="block md:hidden mr-1"/>
      </section>

      <section>
        <h2 className="text-2xl font-extrabold mb-4 text-[#3D3D3D]">Course Materials</h2>
        <ul className="space-y-2">
          {courseMaterialsData.map((material) => (
            <li key={material.id} className="">
              <Link
                to={material.title==='JavaScript & DOM' ? 'https://www.youtube.com/watch?v=hRaDYCHqFQQ':`/courses/${material.id}`}
                className="flex h-16 justify-between items-center px-4 py-2 bg-white border-b border-[#5555552f] rounded cursor-pointer hover:bg-[#FBFCFE]"
              >
                <span className="flex items-center">
                  {iconMap[material.icon] || <FiFileText className="text-blue-600 mr-2" />}
                  {material.title}
                </span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </StudentDashboardLayout>
  );
};

export default CourseMaterial;