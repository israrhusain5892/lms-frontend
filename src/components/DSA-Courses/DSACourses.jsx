// import "../../index.css";
import courseimg from "../../assets/images/course.png";
import { FaSearch } from "react-icons/fa";
import './dsacourses.css';
import './dsa.css';

export default function DSACourse() {
  const courses = [
    {
      id: 1,
      title: "Data Structure and Algorithms",
      category: "Web Development",
      instructor: "Esther Howard ",
      duration: "   5hr",
      progress: 60,
    },
    {
      id: 2,
      title: "Data Structure and Algorithms",
      category: "Web Development",
      instructor: "Esther Howard",
      duration: "5hr",
      progress: 40,
    },
    {
      id: 3,
      title: "Data Structure and Algorithms",
      category: "Web Development",
      instructor: "Esther Howard",
      duration: "5hr",
      progress: 80,
    },
  ];

  return (
    <div className="p-0  lg:p-6 max-w-6xl mx-auto dsaContainer">
      {/* Page Title & Search Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 dsa">
        <h1 className="text-md md:text-2xl lg:text-3xl font-semibold mr-10 w-full">Data Structure & Algorithms</h1>
        <div className="lg:flex items-center hidden md:block space-x-2 mt-3 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2  md:w-50 rounded-md focus:outline-none "
          />
          <button className="bg-blue-600 flex gap-2 justify-center items-center text-white px-4 py-2 rounded-md whitespace-nowrap">
            <FaSearch/> Search Videos
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4 pathdsa">Home &gt; Video &gt; Folder 2</nav>

      {/* Course List */}
      <div className="space-y-6 ">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#EEF2FF] p-1 md:!p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start relative overflow-hidden "
          >
            {/* Course Content */}
            <div className="w-full mb-6 flex gap-3 justify-center sm:flex-row items-center sm:items-start">
              {/* Course Image */}
              <img src={courseimg} alt="Course" className="h-14 md:h-auto" />

              {/* Course Info */}
              <div className="sm:ml-4 flex-1 text-start sm:text-left mt-3 md:!mt-0 leading-6 md:leading-10  sm:mt-0 w-full">
                <span className="bg-blue-100 text-[#656565]   text-[9px] md:text-[16px] px-2 py-1 rounded-md">{course.category}</span>
                <h2 className=" mb-1   text-[10px] md:text-[20px] font-semibold mt-1 md:mt-3 text-[#3D3D3D]">{course.title}</h2>
                <div className="text-[#656565]  flex gap-4 ">
                  <p className="text-[8px] md:!text-[16px] ">{course.instructor} </p> <p className="text-[9px] md:!text-[16px]">{course.duration}</p>
                </div>
              </div>

              {/* Start Learning Button */}
              <button className="bg-blue-600 text-white px-1 md:p-[10px€]  py-2 rounded-3xl mt-3 sm:mt-0 sm:ml-4 md:w-[131px] text-[10px] md:text-[16px] w-[100px]">
                Start Learning
              </button>
            </div>

            {/* Progress Bar - Now Positioned at Bottom */}
            
            <div className="absolute bottom-3 left-4  md:w-[600px] sm:w-[300px] lg:w-[80%] w-[200px] bg-gray-300 h-2 ">
              <div
                className="h-2 bg-green-500 transition-all duration-500 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
              
            </div>
            <p className="text-sm text-gray-600 mt-1 absolute bottom-2 right-5  text-right">{course.progress}% Finished</p>

          </div>
        ))}
      </div>
    </div>
  );
}