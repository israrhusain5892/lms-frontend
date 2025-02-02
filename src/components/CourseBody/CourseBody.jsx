/* eslint-disable react/no-unescaped-entities */
import data from "../../utils/CourseBody/data.json";
import demoprofile from "../../assets/images/demo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./course-body.css";
import  { useState } from "react";


const CourseBody = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full courseBody mx-auto space-y-12  ">
      {/* What You'll Learn Section */}
      <section>
        <h2 className="mb-4 font-bold font-sans text-[24px] text-[#3D3D3D] learn ">
          What you'll learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.learningPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <i className="fa-solid fa-calendar-check text-blue-500 text-2xl"></i>
              <div>
                <p className="text-[#333d46] w-[500px] font-san tracking-wider	">
                  {" "}
                  <span className="text-[#18181B] font-semibold">
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
        <h2 className="text-[24px] font-sans  font-bold text-[#3D3D3D] mb-4">
          This Course Includes
        </h2>
        <div className="flex flex-wrap justify-between m-10 gap-8">
          {data.courseIncludes.map((item, index) => (
            <div key={index} className="d-flex items-start align-items-center space-x-4 ">
              <i className={`${item.icon} text-[#1B2128]  text-2xl`}></i>
              <div className="">
                <p className="w-96 text-[#1B2128]">{item.title} <span className="text-[#3D5CFF] underline"> {item.description}</span></p>
               
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Description Section */}
      <section>
        <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">Description</h2>
        <p className="greyTextdesc text-lg">{data.about}</p>
      </section>

      {/* Course Materials Section */}
      <section>
        <h2 className="text-2xl font-bold text-[#3D3D3D] mb-4">
          Course Materials
        </h2>
        <ul className="space-y-4 bg-[#FBFCFE]">
          {data.materials.map((material, index) => (
            <li key={index} className="border-b-2 border-[#cbd5e169]">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <i className={`${material.icon} greyText text-2xl`}></i>
                  <span className="text-black text-base font-sans text-[16px]">{material.names}</span>
                </div>
                <i
                  className={`fa-solid ${
                    activeIndex === index
                      ? "fa-chevron-up"
                      : "fa-chevron-down"
                  } text-gray-600`}
                ></i>
              </div>
              {/* Dynamic subsection details */}
              {activeIndex === index && material.details && (
                <div className="p-4 bg-gray-100">
                  <h3 className="text-lg text-[#3D5CFF] font-bold">
                    {material.details.header}
                  </h3>
                  <h4 className="text-lg font-semibold mb-3 mt-3">
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
        <h2 className="text-2xl font-bold mb-4 text-[#3D3D3D]">Reviews</h2>
        <div className="space-y-6">
          {data.reviews.map((review, index) => (
            <div key={index} className="p-4 shadow-sm">
              <div className="flex justify-start gap-2 items-center mb-2">
                <img
                  src={demoprofile}
                  className="leftImage w-10 h-10 rounded-full"
                  alt="profileimage"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex justify-start gap-4 mt-1">
                    <div className="text-yellow-500 text-sm">
                      {"⭐".repeat(review.rating)}
                    </div>
                    <span className="text-sm greyText">{review.date}</span>
                  </div>
                </div>
              </div>
              <p className="greyText mt-2 lg:w-[500px]">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Author Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-[#3D3D3D]">About Author</h2>
        <div className="flex items-center space-x-6 mb-6 shadow-sm pb-8">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {/* { data.author} */}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              {data.author.name}
            </h3>
            <p className="text-md greyText">{data.author.qualification}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-orange-400 text-sm border-2 border-orange-400 bg-orange-50 rounded-3xl p-1">
                <i className="fa-solid fa-star text-orange-400 mr-1"></i>
                {data.author.rating}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper pb-2 shadow-sm mb-4">
          <div className="mb-6 lg:w-[650px]">
            <p className="text-sm greyText">{data.author.description}</p>
          </div>
        </div>
        <div>
          <ul className="space-y-4">
            {data.author.experience.map((exp, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-6 shadow-sm pr-4"
              >
                <div className="flex justify-center items-center gap-2">
                  <i
                    className={`fa-solid fa-building-columns bg-${exp.color}-100 text-${exp.color}-500 items-center flex justify-center w-10 h-10 rounded-3xl`}
                  ></i>
                  <div className="flex flex-col">
                    <span className="font-medium text-[#0f172a]">
                      {exp.role}
                    </span>
                    <span className="font-medium greyText">
                      {exp.institution}
                    </span>
                  </div>
                </div>
                <span className="text-sm greyText">{exp.years}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseBody;
