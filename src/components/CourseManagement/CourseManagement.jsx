import { useEffect, useState } from "react";
import "./CourseManagement.css"
// import data from "../../utils/CourseManagement/courses.json";
const CourseManagement = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./courses.json") 
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold  fontstyle underline underline-offset-8 decoration-[#D0D0D0]">Course Management</h1>
        <button className="bg-[#3B76F6] buttonfont text-white text-base font-bold px-4 py-3 rounded-md hover:bg-blue-600">
          Add Course
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-md border-[#d9e2ff]  border-2 p-4 hover:shadow-md transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 font-semibold">{course.title}</h3>
            <p className="text-gray-500 text-sm">{course.instructor} • {course.duration}</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-lg font-bold text-gray-800">
                {course.price} <span className="line-through text-gray-500">{course.originalPrice}</span>
              </p>
              <p className="flex items-center text-sm text-gray-600">
                ⭐ {course.rating} ({course.reviews})
              </p>
            </div>
            {course.badge && (
              <span
                className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-md ${
                  course.badge === "Bestseller"
                    ? "bg-red-100 text-red-600"
                    : course.badge === "Top Author"
                    ? "bg-purple-100 text-purple-600"
                    : course.badge === "Editor's Choice"
                    ? "bg-green-100 text-green-600"
                    : "bg-blue-100 text-blue-600"
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
