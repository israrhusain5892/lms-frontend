import { useState } from "react";
import "./midterm.css";
import pdf from "../../assets/images/pdf.png";

const MidtermTest = () => {
  const [text, setText] = useState("");
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [showLinkInput, setShowLinkInput] = useState(false); // State for showing input fields
  const [url, setUrl] = useState(""); // URL input
  const [urlName, setUrlName] = useState(""); // URL name input
  const [links, setLinks] = useState([]); // Store added links
  const [images, setImages] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);


  const handleTextChange = (e) => {
    const newValue = e.target.value;
    setUndoStack((prev) => [...prev, text]);
    setRedoStack([]);
    setText(newValue);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const lastValue = undoStack.pop();
      setRedoStack((prev) => [...prev, text]);
      setText(lastValue);
      setUndoStack([...undoStack]);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextValue = redoStack.pop();
      setUndoStack((prev) => [...prev, text]);
      setText(nextValue);
      setRedoStack([...redoStack]);
    }
  };

  // Show link input when button is clicked
  const handleLinkButtonClick = () => {
    setShowLinkInput(true);
  };

  // Add new link
  const handleAddLink = () => {
    if (url && urlName) {
      setLinks((prevLinks) => [...prevLinks, { url, urlName }]);
      setUrl(""); // Reset URL input
      setUrlName(""); // Reset URL name input
      setShowLinkInput(false); // Hide the input field after submission
    }
  };

  const handleCapitalize = () => {
    const capitalizedText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalizedText);
    setUndoStack((prev) => [...prev, text]);
    setRedoStack([]);
  };


  const handleAddImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImages((prevImages) => [...prevImages, imageUrl]);
    setShowUploadModal(false); // Close the modal after uploading
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleAddImage(file);
    }
  };
  
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
              <li>
                Research And Identify Three Key Algorithms Used In HTML
                Rendering.
              </li>
              <li>
                Explain How These Algorithms Improve The Efficiency Of Web Page
                Loading.
              </li>
              <li>
                Create A Simple HTML Page That Demonstrates The Impact Of One Of
                These Algorithms In Action.
              </li>
              <li>
                Discuss How Understanding These Algorithms Can Enhance Your
                Problem-Solving Skills In Web Development.
              </li>
            </ol>
          </div>
          {/* Attachment Section */}
          <div className="mt-4">
            <a
              href="#"
              className="flex items-center text-[#5a5858] hover:underline"
            >
              <img className="h-20" src={pdf} alt="" />
              Frame Works and Algorithms.pdf
            </a>
          </div>
        </div>

        {/* Text Editor */}
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-black mb-2">
              Attachments (1)
            </h3>
            <h3 className="text-lg font-semibold text-[#fc0909] mb-2 mr-2">
              Due date 22/09/2024
            </h3>
          </div>
          <div className="border-2 border-black p-4 mb-6">
            <textarea
              placeholder="Add Description Here"
              className="w-full h-80 border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 resize-none"
              value={text}
              onChange={handleTextChange}
            ></textarea>
            <div className="flex flex-col items-start justify-start mt-4">
              <div className="flex items-center flex-wrap gap-2 mb-4">
                {/* Undo Button */}
                <button
                  onClick={handleUndo}
                  className={`px-4 py-1 border-2 border-[#94A3B8] rounded-md ${undoStack.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={undoStack.length === 0}
                >
                  <i className="fa-solid fa-undo"></i>
                </button>
                {/* Redo Button */}
                <button
                  onClick={handleRedo}
                  className={`px-4 py-1 border-2 border-[#94A3B8] rounded-md ${redoStack.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={redoStack.length === 0}
                >
                  <i className="fa-solid fa-redo"></i>
                </button>
                {/* Link Button */}
                <button
                  onClick={handleLinkButtonClick}
                  className="px-4 py-1 border-2 border-[#94A3B8] rounded-md"
                >
                  <i className="fa-solid fa-link"></i>
                </button>
                {/* Bold Button */}
                <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                  <b>B</b>
                </button>
                {/* Capitalize  Button */}
                <button
                  onClick={handleCapitalize}
                  className="px-4 py-1 border-2 border-[#94A3B8] rounded-md"
                >
                  Aa
                </button>
                {/* Underline  Button */}
                <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                  <i className="fa-solid fa-underline"></i>
                </button>
                <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                  <i className="fa-solid fa-list-ul"></i>
                </button>
                <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md">
                  <i className="fa-solid fa-list-ol"></i>
                </button>
                {/* <button ">
                </button> */}

                <button className="px-4 py-1 border-2 border-[#94A3B8] rounded-md" onClick={() => setShowUploadModal(true)}>
                  <i className="fa-solid fa-image"></i>
              
            </button>
            
              </div>
              
              <button className="px-10 py-3 bg-[#3D5CFF] text-white text-sm rounded-md hover:bg-blue-700">
                Add
              </button><div className="mt-4 flex flex-wrap ">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Uploaded"
                className="w-auto h-auto mt-2 border-2 border-black mr-2"
              />
            ))}
          </div>
            </div>
          </div>

          

          {/* Link Input Section */}
          {showLinkInput && (
            <div className="flex gap-2">
              <input
                type="text"
                className="border p-2 rounded-md"
                placeholder="Enter URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <input
                type="text"
                className="border p-2 rounded-md"
                placeholder="Enter URL Name"
                value={urlName}
                onChange={(e) => setUrlName(e.target.value)}
              />
              <button
                onClick={handleAddLink}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Add Link
              </button>
            </div>
          )}

          {/* Links Below */}
          <div className="mt-4">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
              
                <a
                  href={link.url}
                  className="text-blue-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.urlName}
                </a>
              </div>
            ))}
          </div>
        </div>

        {showUploadModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="bg-white p-6 rounded-lg w-96 text-center">
            <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
            <p className="text-sm text-gray-600 mb-4">
              Drag and drop an image here or click the button below to upload.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => document.querySelector("#hidden-file-input").click()}
            >
              Choose File
            </button>
            <input
              id="hidden-file-input"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) handleAddImage(file);
              }}
            />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => setShowUploadModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
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
