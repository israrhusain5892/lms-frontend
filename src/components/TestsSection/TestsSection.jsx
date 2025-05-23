import { useState } from "react";
import tests from "../../utils/TestsSection/test.json"; // Import JSON data
import "./testsection.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Link } from "react-router-dom";

const TestsSection = () => {
  const [openIds, setOpenIds] = useState([1]); // Track open dropdowns first one already opened

  const toggleDropdown = (id) => {
    // If ID is already open, close it; otherwise, add it to openIds
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="p-2 md:mt-[-1px] mt-[20px] w-100% test-section">
      <h1 className="mb-4 text-[#1e1e1e]">
        <nav aria-label="breadcrumb">
          <span className="md:text-[16px] text-[12px] font-bold font-sans text-[#1E1E1E80]">
            <a href="/">Home</a> &gt; <a href="/test">Test</a> &gt; HTML & CSS
            BASICS
          </span>
        </nav>
      </h1>
      <h1 className="md:text-2xl text-[22px] font-sans font-bold text-[#0000000] mb-4">
        Data Structure & Algorithms
      </h1>
      <div className="space-y-4 bg-gray-100 p-6">
        {tests.map(({ id, title, description, type, dateCreated, grade }) => (
          <div
            key={id}
            className="bg-white shadow-md rounded-lg border border-gray-200"
          >
            {/* Dropdown Button */}
            <button
              onClick={() => toggleDropdown(id)}
              className="w-full flex justify-between items-center p-4 text-left"
            >
              <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
              <i
                className={`fas fa-chevron-down transform transition-transform ${
                  openIds.includes(id) ? "rotate-180" : ""
                }`}
              ></i>
            </button>

            {/* Dropdown Content */}
            {openIds.includes(id) && (
              <div className="p-4 border-t border-gray-200">
                <p className="text-[#475569] mt-2">{description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-base font-semibold text-black">
                    Type Of Test
                  </span>
                  {/* <span className="text-sm font-medium p-2 rounded-lg bg-blue-600 text-white">{type}</span> */}
                  <Link
                    // to={`/${type}`}
                    to={`/quiz`}
                    className="text-sm font-medium p-2 rounded-lg bg-blue-600 text-white no-underline	"
                  >
                    {type}
                  </Link>
                </div>
                <div className="flex items-center justify-between gap-10 mt-2">
                  <div>
                    <i className="fa-solid fa-file m-2 text-[#555]"></i>
                    <span className="text-base font-semibold text-black">
                      Test Created On
                    </span>
                  </div>
                  <span className="text-sm font-medium text-[#555]">
                    {dateCreated}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div>
                    <i className="fa-solid fa-file m-2 text-[#555]"></i>
                    <span className="text-base font-semibold text-black">
                      Your Grade
                    </span>
                  </div>
                  <span className="text-lg font-bold text-[#16A34A]">
                    {grade}
                  </span>
                </div>
                <p className="text-[#0000006e] text-sm mt-4">
                  You Need At Least 74% To Pass. We Keep Your Highest Score.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestsSection;