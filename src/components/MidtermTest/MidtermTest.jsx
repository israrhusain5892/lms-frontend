import "./midterm.css";
import pdf from '../../assets/images/pdf.png';

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
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Mid Term: Task 1</h1>
      </div>
      <div className="bg-white rounded-full lg:w-[850px]">
        {/* Task Details Card */}
        <div className="flex justify-between items-center p-6 border-2 border-gray-200">
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
        <div className="border-2 border-t-0 border-gray-200 rounded-sm p-4 mb-6">
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
            <a href="#" className="flex items-center text-[#5a5858] hover:underline">
              <img className="h-20" src={pdf} alt="" />
              Frame Works and Algorithms.pdf
            </a>
          </div>
        </div>
        {/* Attachments Section */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-black mb-2">Attachments (1)</h3>
            <h3 className="text-lg font-semibold text-[#fc0909] mb-2 mr-2">
              Due date 22/09/2024
            </h3>
          </div>
          <div className="border-2 border-black p-4 mb-6">
            {/* Text Editor Toolbar */}
            <textarea
              placeholder="Add Description Here"
              className="w-full h-80 border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
            ></textarea>
            <div className="flex flex-col items-start justify-start mt-4">
            <div className="flex items-center flex-wrap gap-2 mb-4">

              <button className="px-4 py-1 border-2 border-[#94A3B8]  rounded-md">
                <i className="fa-solid fa-undo"></i>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <i className="fa-solid fa-redo"></i>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <i className="fa-solid fa-link"></i>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <b>B</b>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                Aa
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <i className="fa-solid fa-underline"></i>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <i className="fa-solid fa-list-ul"></i>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <i className="fa-solid fa-list-ol"></i>
              </button>
              <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                <i className="fa-solid fa-image"></i>
              </button>
            </div>
              <button className="px-10 py-3 bg-[#3D5CFF] text-white text-sm rounded-md hover:bg-blue-700">
                Add
              </button>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="text-right">
          <button className="px-12 py-3 bg-[#3D5CFF] text-white text-sm rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidtermTest;
