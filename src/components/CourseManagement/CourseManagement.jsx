import { useEffect, useState } from "react";
import "./CourseManagement.css";
import { FaStar } from "react-icons/fa";

// import data from "../../utils/CourseManagement/courses.json";
const CourseManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json") 
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="p-6 bg-[#F8FAFC]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold  fontstyle underline underline-offset-8 decoration-[#D0D0D0]">Course Management</h1>
        <button className="bg-[#3B76F6] buttonfont text-white text-base font-bold px-4 py-3 rounded-md hover:bg-blue-600">
          Add Course
        </button>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white cards rounded-md border-[#d9e2ff] font-semibold border-2  p-4 hover:shadow-md transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-44 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold">{course.title}</h3>
            <p className="text-[#334155] text-xs">{course.instructor} • {course.duration}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg text-black flex gap-1 ">
                {course.price} <span className=" text-base text-[#1719b6]">{course.originalPrice}</span>
              </p>
              <p className="flex items-center text-sm text-black">
              <FaStar className="text-[#FB923C]"/> {course.rating} ({course.reviews})
              </p>
            </div>
            {course.badge && (
              <span
                className={`mt-2 inline-block px-3 py-1 text-xs font-medium rounded-md ${
                  course.badge === "Bestseller"
                    ? "bg-[#FFC7CB] text-black"
                    : course.badge === "Top Author"
                    ? "bg-[#E7D5FF] text-black"
                    : course.badge === "Editor's Choice"
                    ? "bg-[#DCFCE7] text-black"
                    : "bg-blue-100 text-black"
                }`}
              >
                {course.badge}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseManagement;
