import "./midterm.css";
import pdf from '../../assets/images/pdf.png'
const MidtermTest = () => {
  return (
    <div className="p-6 min-h-screen flex flex-col">
      {/* Breadcrumb Section */}
      <nav className="text-sm text-gray-500 mb-4">
        <a href="#" className="hover:underline">
          Home
        </a>
        <span className="mx-2">&gt;</span>
        <a href="#" className="hover:underline">
          Task
        </a>
        <span className="mx-2">&gt;</span>
        <span>Task 1</span>
      </nav>

      {/* Main Content Section */}
        {/* Header Section */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Mid Term: Task 1</h1>
        </div>
      <div className="bg-white  rounded-lg p-6 lg:w-[850px]">

        {/* Task Details Card */}
          <div className="flex justify-between items-center  p-6 border-2 border-gray-200">
            <div className="flex justify-center items-center gap-3"> 
            <i className="fa-solid fa-clipboard text-2xl w-10 h-10 flex justify-center items-center text-[#3d5cff] p-2 bg-[#e6eeff] rounded-full"></i>
            <div>
            <h2 className="text-lg font-semibold text-gray-800">Task 1</h2>
            <p className="text-[#555]">fadil | sep 18, 2024</p>            
            </div>
            
            </div>
            <div className="flex gap-12 justify-center items-center">
            <span className="text-green-600 font-medium">Submitted</span>
            <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>

          </div>
        <div className=" border border-gray-200 rounded-md p-4 mb-6">

          <div className="text-gray-700 space-y-2">
            <p className="font-semibold">**Task: Exploring HTML Algorithms**</p>
            <ol className="list-decimal list-inside">
              <li>Research And Identify Three Key Algorithms Used In HTML Rendering.</li>
              <li>Explain How These Algorithms Improve The Efficiency Of Web Page Loading.</li>
              <li>
                Create A Simple HTML Page That Demonstrates The Impact Of One Of These
                Algorithms In Action.
              </li>
              <li>
                Discuss How Understanding These Algorithms Can Enhance Your Problem-Solving Skills
                In Web Development.
              </li>
            </ol>
          </div>

          {/* Attachment Section */}
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center text-[#5a5858] hover:underline"
            >
              <img className="h-20" src={pdf} alt=""/>
              Frame Works and Algorithms.pdf
            </a>
          </div>
        </div>

        {/* Attachments Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Attachments (1)</h3>
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <textarea
              placeholder="Add Description Here"
              className="w-full h-24 border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
            ></textarea>

            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 10.5l7.5 7.5 7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 10.5L13.5 3 6 10.5"
                    />
                  </svg>
                </button>
                <button className="p-2 rounded bg-gray-100 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 15.75l3 3m0 0l-3 3m3-3H3"
                    />
                  </svg>
                </button>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidtermTest;
