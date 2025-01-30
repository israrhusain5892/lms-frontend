import "../../index.css";
import courseimg from "../../assets/images/course.png";

export default function CourseList() {
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
    <div className="p-4 md:p-6 max-w-6xl mx-auto">
      {/* Page Title & Search Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <h1 className="text-xl md:text-2xl font-semibold mr-10">Data Structure & Algorithms</h1>
        <div className="flex items-center space-x-2 mt-3 md:mt-0 w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-2 w-full md:w-64 rounded-md focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
            🔍 Search Videos
          </button>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-4">Home &gt; Video &gt; Folder 2</nav>

      {/* Course List */}
      <div className="space-y-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#EEF2FF] p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start relative overflow-hidden"
          >
            {/* Course Content */}
            <div className="w-full mb-6 flex flex-col sm:flex-row items-center sm:items-start">
              {/* Course Image */}
              <img src={courseimg} alt="Course" className="lg:w-40 h-16 md:h-20" />

              {/* Course Info */}
              <div className="sm:ml-4 flex-1 text-center sm:text-left mt-3 sm:mt-0 w-full">
                <span className="bg-blue-100 text-xs px-2 py-1 rounded-md">{course.category}</span>
                <h2 className="text-lg font-semibold mt-1">{course.title}</h2>
                <p className="text-gray-600 text-sm">
                  {course.instructor}  {course.duration}
                </p>
              </div>

              {/* Start Learning Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-3xl mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto">
                Start Learning
              </button>
            </div>

            {/* Progress Bar - Now Positioned at Bottom */}
            
            <div className="absolute bottom-3 left-4  sm:w-[400px] md:w-[550px] w-[200px] bg-gray-300 h-2 ">
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
