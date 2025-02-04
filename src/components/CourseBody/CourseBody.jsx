/* eslint-disable react/no-unescaped-entities */
import data from "../../utils/CourseBody/data.json";
import demoprofile from "../../assets/images/demo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./course-body.css";
import { useState } from "react";

import { GrCertificate } from "react-icons/gr";
import { CiCalendar } from "react-icons/ci";
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";
import { PiStack } from "react-icons/pi";
import { BiCodeBlock } from "react-icons/bi";
import { GoChecklist } from "react-icons/go";


const CourseBody = () => {

  const iconMapping = {
    "fa-solid fa-awad": <GrCertificate className="text-[#212121] text-2xl" />,
    "fa-solid fa-video": <FaExternalLinkAlt className="text-[#212121] text-2xl" />,
    "fa-solid fa-calendar": <CiCalendar className="text-[#212121] text-3xl" />,
    "fa-solid fa-clipboard": <MdOutlineQuiz className="text-[#212121] text-2xl" />,
    "fa-solid fa-code": <BiCodeBlock  className="text-[#212121] text-2xl" />,
    "fa-solid fa-book": <PiStack    className="text-[#212121] text-2xl" />,
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full courseBody lg:px-20 mx-auto space-y-12  ">
      {/* What You'll Learn Section */}
      <section>
        <h2 className="mb-4 p-4  font-bold font-poppins text-[24px] text-[#3D3D3D] learn ">
          What you'll learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 ">
          {data.learningPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <GoChecklist className="text-blue-500 text-3xl"/>
              <div>
                <p className="w-[270px] sm:w-[358px] lg:w-[400px] font-poppins text-[15px] tracking-wider	">
                  {" "}
                  <span className="text-[#18181B] font-bold">
                    {point.title} :{" "}
                  </span>
                  {point.description}

                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* This Course Includes Section */}
      <section>
      <h2 className="text-[24px] font-sans px-4  font-bold text-[#3D3D3D] mb-4">
        This Course Includes
      </h2>
      <div className="flex flex-wrap justify-between m-10 gap-8">
        {data.courseIncludes.map((item, index) => (
          <div key={index} className="flex items-start space-x-4 lg:!px-20 lg:py-4">
            {iconMapping[item.icon] || <GrCertificate className="text-[#212121] text-2xl" />}
            <div>
              <p className="w-96 font-poppins text-[13px] md:text-[18px] text-[#1B2128]">
                {item.title} <span className="text-[#3D5CFF] underline">{item.description}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Description Section */}
      <section>
        <h2 className="text-[24px] font-poppins px-4  font-bold text-[#3D3D3D] mb-4">Description</h2>
        <p className="text-[16px] font-poppins px-4  text-[#656565]">{data.about}</p>
      </section>

      {/* Course Materials Section */}
      <section>
        <h2 className="text-[24px] px-4 font-bold text-[#3D3D3D] mb-4">
          Course Materials
        </h2>
        <ul className="space-y-4 bg-[#FBFCFE]">
          {data.materials.map((material, index) => (
            <li key={index} className="border-b-2 border-[#cbd5e169]">
              <div
                className="flex items-center justify-between p-4  cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <i className={`${material.icon} text-[#858597] text-2xl`}></i>
                  <span className="text-black text-base font-poppins text-[16px]">{material.names}</span>
                </div>
                <i
                  className={`fa-solid ${activeIndex === index
                    ? "fa-chevron-up"
                    : "fa-chevron-down"
                    } text-gray-600`}
                ></i>
              </div>
              {/* Dynamic subsection details */}
              {activeIndex === index && material.details && (
                <div className="p-4  bg-gray-50">
                  <h3 className="text-[16px] text-[#3D5CFF] font-bold">
                    {material.details.header}
                  </h3>
                  <h4 className="text-[16px] text-lg font-semibold mb-3 mt-3">
                    {material.details.subheader}
                  </h4>
                  <p className="text-[16px] font-sans font-normal leading-[25.6px] text-[#656565]">
                    {material.details.content}
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-[24px] px-4  font-bold mb-4 text-[#3D3D3D]">Reviews</h2>
        <div className="space-y-6">
          {data.reviews.map((review, index) => (
            <div key={index} className="p-4  shadow-sm">
              <div className="flex justify-start gap-2 items-center mb-2">
                <img
                  src={demoprofile}
                  className="leftImage rounded-full"
                  alt="profileimage"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex justify-start gap-4 mt-1">
                    <div className="text-[#FB923C]text-sm">
                      {"⭐".repeat(review.rating)}
                    </div>
                    <span className="text-[16px] text-[#0F172A">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="text-[#475569] text-[16px] mt-2 lg:w-[500px]">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Author Section */}
      <section>
        <h2 className="text-[24px] font-bold mb-6 px-4 text-[#3D3D3D]">About Author</h2>
        <div className="flex items-center space-x-6 mb-6 px-4 shadow-sm pb-8">
          <div className="w-12 h-12 bg-[#FFE5BB] rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {/* { data.author} */}
          </div>
          <div>
            <h3 className="text-[16px] text-[#0F172A]">
              {data.author.name}
            </h3>
            <p className="text-[14px] text-[#64748B]">{data.author.qualification}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-orange-400 text-sm border-2 border-orange-400 bg-orange-50 rounded-3xl p-1">
                <i className="fa-solid fa-star text-[#FB923C] mr-1"></i>
                {data.author.rating}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper pb-2 shadow-sm mb-4">
          <div className="mb-6 lg:!px-2 w-[400px] lg:w-[750px]">
            <p className="text-[16px] px-8 text-[#475569]">{data.author.description}</p>
          </div>
        </div>
        <div>
          <ul className="space-y-4">
            {data.author.experience.map((exp, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-6 px-3 shadow-sm pr-4"
              >
                <div className="flex justify-center items-center gap-2">
                  <i
                    className={`fa-solid fa-building-columns bg-${exp.color}-100 text-${exp.color}-500 items-center flex justify-center w-10 h-10 rounded-3xl`}
                  ></i>
                  <div className="flex flex-col">
                    <span className="font-[14px] text-[#0f172A]">
                      {exp.role}
                    </span>
                    <span className="font-[12px] text-[#64748B]">
                      {exp.institution}
                    </span>
                  </div>
                </div>
                <span className="font-[12px] text-[#0F172A]">{exp.years}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseBody;
