/* eslint-disable no-unused-vars */

import { useState, useEffect, useRef } from "react";
import "./addcourse.css";
import defaultimg from "../../assets/images/thumbnail.jpg";
import { Trash2 } from "lucide-react";
import { Search } from "lucide-react";
import { FaUnderline, FaBold } from "react-icons/fa";
import { PiTextAaBold } from "react-icons/pi";
import { VscListOrdered } from "react-icons/vsc";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RiLinkM } from "react-icons/ri";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { ChevronDown, ChevronUp } from "lucide-react";

const AddCourse = () => {
  const [tags, setTags] = useState([
    "Design",
    "Research",
    "Presentation",
    "Web Development",
    "Programming",
    "Salesforce",
  ]);

  const [newTag, setNewTag] = useState(""); // State for new tag input
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailName, setThumbnailName] = useState("");

  // Handle thumbnail selection
  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setThumbnail(URL.createObjectURL(file));
      setThumbnailName(file.name);
    }
  };

  // Remove selected thumbnail
  const handleRemoveThumbnail = () => {
    setThumbnail(null);
    setThumbnailName("");
  };

  // Remove a tag
  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // Add a new tag
  const handleAddTag = (event) => {
    if (event.key === "Enter" && newTag.trim() !== "") {
      event.preventDefault();
      if (!tags.includes(newTag.trim())) {
        setTags([...tags, newTag.trim()]);
        setNewTag(""); // Clear input field after adding
      }
    }
  };

  
  const [studentLearnings, setStudentLearnings] = useState([""]);
  // useEffect(() => {
  //   handleAddModule();
  //   handleAddLearning();
  // }, []);



  

  // Add more fields for what students will learn
  const handleAddLearning = () => {
    setStudentLearnings([...studentLearnings, ""]);
  };

  // Remove a learning field
  const handleRemoveLearning = (index) => {
    setStudentLearnings(studentLearnings.filter((_, i) => i !== index));
  };

  const [text, setText] = useState("");
 
  const [showLinkInput, setShowLinkInput] = useState(false); // State for showing input fields
  const [url, setUrl] = useState(""); // URL input
  const [urlName, setUrlName] = useState(""); // URL name input
  const [links, setLinks] = useState([]); // Storedd links
  const [images, setImages] = useState([]);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isCapitalized, setIsCapitalized] = useState(false);

  const textareaRef = useRef(null); // Reference to textarea for direct DOM manipulation
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleTextChange = (e) => {
    const newValue = e.target.value;
    
    setText(newValue);
  };

  const textareaStyle = {
    fontWeight: isBold ? "bold" : "normal",
    textDecoration: isUnderline ? "underline" : "none",
  };

  const handleBold = () => {
    setIsBold(!isBold);
  };

  const handleUnderline = () => {
    setIsUnderline(!isUnderline);
  };

  const handleLinkButtonClick = () => {
    setShowLinkInput(true);
  };

  const handleAddLink = () => {
    if (url && urlName) {
      setLinks((prevLinks) => [...prevLinks, { url, urlName }]);
      setUrl(""); // Reset URL input
      setUrlName(""); // Reset URL name input
      setShowLinkInput(false); // Hide the input field after submission
    }
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

  const handleToggle = () => {
    
    if (isCapitalized) {
      // If capitalized, revert to the original state (lowercase or uppercase)
      setText(text.toLowerCase());
    } else {
      // Capitalize the first letter of each word (Title Case)
      setText(
        text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
    setIsCapitalized(!isCapitalized);
  };

  const handleOrderedList = () => {
    setText((prevText) => {
      const listItems = prevText
        .split("\n")
        .map((item, index) => {
          // Add proper numbering for each item
          return `${index + 1}. ${item}`;
        })
        .join("\n");
      return listItems;
    });
  };


  const handleUnorderedList = () => {
    setText((prevText) => {
      const listItems = prevText
        .split("\n")
        .map((item) => {
          // Add bullet points (▪️) for each item
          return `▪️ ${item}`;
        })
        .join("\n");
      return listItems;
    });
  };


  // Add Module List 

  const [modulesList, setModulesList] = useState([{ id: 1, title: "", description: "" }]);
  const [expandedModule, setExpandedModule] = useState(1);

  const handleAddModule = () => {
    const newModule = {
      id: modulesList.length + 1,
      title: "",
      description: "",
    };
    setModulesList([...modulesList, newModule]);
  };

  const handleDeleteModule = (id) => {
    if (modulesList.length > 1) {
      setModulesList(modulesList.filter((module) => module.id !== id));
    }
  };

  


  // Dropdown 

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const options = ["Certificate", "Quiz", "Mini Project", "Live Session", "List item", "List item", "List item"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelection = (option) => {
    setSelectedItems((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  };
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#141C24] ralwayfont mb-4 underline underline-offset-8 decoration-[#D0D0D0]">
        Add New Course
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[80%]">
        {/* Course Name */}
        <div>
          <label className="block text-lg font-bold text-[#1E1E1E]">
            Course Name
          </label>
          <input
            type="text"
            placeholder="Enter course name"
            className="mt-1 w-full p-2 border-[#D8DDE3] border shadow-sm rounded-md ralwayfont font-semibold"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-lg font-bold text-[#1E1E1E]">
            Thumbnail
          </label>
          <div className="border-[#D8DDE3]  border shadow-sm p-2 rounded-md flex flex-col lg:flex-row gap-2 items-center">
            <img
              src={thumbnail || defaultimg}
              alt="Thumbnail"
              className="w-30 h-20 mr-2 rounded"
            />

            <div className="flex flex-col items-center">
              {thumbnail ? (
                <>
                  <span className="font-semibold text-[#686868]">
                    {thumbnailName}
                  </span>
                  <button
                    onClick={handleRemoveThumbnail}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() =>
                      document.getElementById("thumbnailInput").click()
                    }
                    className="bg-[#3B76F6] hover:bg-[#2c67e8] font-bold text-white px-4 py-2 rounded"
                  >
                    Upload Thumbnail
                  </button>
                  <span className="text-sm font-semibold flex justify-center items-center gap-4">Max file size 10MB 800x600 px   <MdOutlineFileDownload className="text-black text-lg"/>  </span>
                  <input
                    id="thumbnailInput"
                    type="file"
                    accept="image/*"
                    className="hidden border-[#D8DDE3] border shadow-sm"
                    onChange={handleThumbnailChange}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Includes */}
      <div className="relative md:w-4/5 mt-4">
      <button
        onClick={toggleDropdown}
        className="w-full px-4 flex justify-between items-center py-2 text-left border-[#D8DDE3] border shadow-sm rounded-lg"
      >
        Course Includes <FaAngleDown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          {options.map((option, index) => (
            <label key={index} className="flex  items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedItems.includes(option)}
                onChange={() => handleSelection(option)}
                className="w-5 h-5 "
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {/* Display Selected Items Below */}
      {selectedItems.length > 0 && (
        <div className="mt-2 p-2 bg-gray-100 rounded-md">
          <strong>Selected:</strong> ♦ {selectedItems.join(" ,♦ ")}
        </div>
      )}
    </div>


      {/* Description */}
      <div className="mt-4 md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">
          Description
        </label>
        <textarea
          placeholder="Enter course description"
          className="mt-1 w-full p-2 border-[#D8DDE3] border shadow-sm ralwayfont font-semibold rounded-md"
          rows="4"
        ></textarea>
      </div>

      {/* About this Course */}
      <div className="mt-4 md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">
          About this Course
        </label>
        <textarea
          placeholder="Enter document description"
          className="mt-1 w-full p-2 border-[#D8DDE3] border shadow-sm rounded-md font-semibold"
          rows="7"
          value={text}
          onChange={handleTextChange}
          ref={textareaRef}
          style={textareaStyle}
        ></textarea>

        
      </div>

      <div className="flex flex-col items-start justify-start mt-4">
        <div className="flex items-center flex-wrap gap-2 mb-4">
          {/* Bold Button */}
          <button
            className="px-4 py-2 border bg-[#DBE8FE] font-bold border-[#94A3B8] rounded-md"
            onClick={handleBold}
          >
            <FaBold />
          </button>
          {/* Underline  Button */}
          <button
            onClick={handleUnderline}
            className="px-4 py-2 border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
          >
            <FaUnderline />
          </button>
          {/* Link Button */}
          <button
            className="px-4 py-2 font-bold bg-[#DBE8FE] text-lg border border-[#94A3B8] rounded-md"
            onClick={handleLinkButtonClick}
          >
            <RiLinkM/>
          </button>
          {/* Capitalize  Button */}
          <button
            onClick={handleToggle}
            className="px-3 py-2 border bg-[#DBE8FE] font-semibold  border-[#94A3B8] rounded-md"
          >
            {isCapitalized ? (
              <PiTextAaBold />
            ) : (
              <PiTextAaBold className="text-lg" />
            )}
          </button>

          <button
            onClick={handleOrderedList}
            className="px-4 py-2 border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
          >
            <VscListOrdered className="text-xl" /> {/* Ordered List Icon */}
          </button>

          <button
            onClick={handleUnorderedList}
            className="px-4 py-2 text-lg border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
          >
            <AiOutlineUnorderedList />
            <i className="fa-solid fa-list-ul"></i> {/* Unordered List Icon */}
          </button>
            {/* Insert Image button */}
          <button
            className="px-4 py-2  border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
            onClick={() => setShowUploadModal(true)}
          >
            <FaRegImage/>
          </button>
        </div>

        <div className="mt-4 flex flex-wrap ">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Uploaded"
              className="w-auto h-40 mt-2 border-2 border-black mr-2"
            />
          ))}
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

          {showUploadModal && (
          <div
            className="fixed z-[120] inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            <div className="bg-white p-6 rounded-lg w-80 md:w-96 text-center">
              <h2 className="text-lg font-semibold mb-4">Upload Image</h2>
              <p className="text-sm text-gray-600 mb-4">
                Drag and drop an image here or click the button below to upload.
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                onClick={() =>
                  document.querySelector("#hidden-file-input").click()
                }
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

      {/* Tags */}
      <div className="mt-4 md:w-1/3">
        <label className="block text-lg font-bold text-[#1E1E1E]">Tags</label>
        <div className="mt-1 border-[#D8DDE3] relative border shadow-sm p-2 rounded-md">
          {/* Input field to add new tags */}
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyPress={handleAddTag}
            placeholder="Search here"
            className="mb-2 w-full p-2 outline-none text-[#686868] border-b-[#DEDEDE] border-white border shadow-sm rounded-sm text-md"
          />
          <Search
            className="absolute right-4 top-7 -translate-y-1/2 text-black"
            size={20}
          />

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 rounded-xl text-sm flex items-center"
              >
                {tag}{" "}
                <button
                  className="ml-1 text-red-500"
                  onClick={() => handleRemoveTag(index)}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Course Material Section */}


      <div className="mt-4 flex justify-between items-center w-full md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">
          Course Material
        </label>
        <button
          onClick={handleAddModule}
          className="text-[#3B76F6] hover:text-[#2c67e8] font-medium text-base"
        >
          Add Module
        </button>
      </div>
      {modulesList.map((module, index) => (
        <div key={module.id} className="mt-3 bg-white p-4 rounded-lg border-[#D8DDE3] border shadow-sm md:w-4/5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setExpandedModule(expandedModule === module.id ? null : module.id)
            }
          >
            <h3 className="text-md font-medium">Module {module.id}</h3>
            <div className="flex gap-2">
              {expandedModule === module.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              {modulesList.length > 1 && index !== 0 && (
                <button onClick={() => handleDeleteModule(module.id)}>
                  <Trash2 size={20} className="text-red-500 hover:text-red-700" />
                </button>
              )}
            </div>
          </div>
          {expandedModule === module.id && (
            <div className="mt-4">
              <label className="block text-sm font-medium">Title</label>
              <input
                type="text"
                placeholder="Add title"
                className="w-full p-2 border-[#D8DDE3] border shadow-sm rounded mt-1"
                value={module.title}
                onChange={(e) =>
                  setModulesList(
                    modulesList.map((m) =>
                      m.id === module.id ? { ...m, title: e.target.value } : m
                    )
                  )
                }
              />

              <label className="block mt-4 text-sm font-medium">Description</label>
              <textarea
  placeholder="Add description"
  className="w-full p-2 border-[#D8DDE3] border shadow-sm rounded mt-1 h-24"
  value={text} // Ensure 'text' is correctly defined in state
  onChange={(e) => {
    handleTextChange(e); // Call the function to update text state
    setModulesList((prevModules) =>
      prevModules.map((m) =>
        m.id === module.id ? { ...m, description: e.target.value } : m
      )
    );
  }}
  ref={textareaRef}
  style={textareaStyle}
/>


              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={handleAddModule}
                  className="bg-[#3B76F6] font-semibold hover:bg-[#2c67e8] text-white px-4 py-2 rounded"
                >
                  Save & Add Another
                </button>
                {/* Bold Button */}
          <button
            className="px-4 py-2 border bg-[#DBE8FE] font-bold border-[#94A3B8] rounded-md"
            onClick={handleBold}
          >
            <FaBold />
          </button>
          {/* Underline  Button */}
          <button
            onClick={handleUnderline}
            className="px-4 py-2 border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
          >
            <FaUnderline />
          </button>
          {/* Capitalize  Button */}
          <button
            onClick={handleToggle}
            className="px-3 py-2 border bg-[#DBE8FE] font-semibold  border-[#94A3B8] rounded-md"
          >
            {isCapitalized ? (
              <PiTextAaBold />
            ) : (
              <PiTextAaBold className="text-lg" />
            )}
          </button>

          <button
            onClick={handleOrderedList}
            className="px-4 py-2 border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
          >
            <VscListOrdered className="text-xl" /> {/* Ordered List Icon */}
          </button>

          <button
            onClick={handleUnorderedList}
            className="px-4 py-2 text-lg border bg-[#DBE8FE] border-[#94A3B8] rounded-md"
          >
            <AiOutlineUnorderedList />
            <i className="fa-solid fa-list-ul"></i> {/* Unordered List Icon */}
          </button>
              </div>
            </div>
          )}
        </div>
      ))}


      {/* What students will learn */}
      <div className="mt-4 flex justify-between items-center w-full md:w-4/5">
        <label className="block text-md md:text-lg font-bold text-[#1E1E1E]">
          What students will learn
        </label>
        <button
          onClick={handleAddLearning}
          className="text-[#3B76F6] hover:text-[#2c67e8] font-medium text-base"
        >
          Add More
        </button>
      </div>

      {studentLearnings.map((learning, index) => (
        <div key={index} className="relative mt-2 w-5/6 md:w-4/5">
          <input
            type="text"
            value={learning}
            onChange={(e) => {
              const newLearnings = [...studentLearnings];
              newLearnings[index] = e.target.value;
              setStudentLearnings(newLearnings);
            }}
            placeholder="Enter course name"
            className="w-full h-12 p-2 border-[#D8DDE3] border shadow-sm rounded-md ralwayfont font-semibold"
          />
          {studentLearnings.length > 1 && (
            <button
              className="absolute right-[-50px] top-1 text-red-500 bg-red-50 rounded-md p-2"
              onClick={() => handleRemoveLearning(index)}
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      ))}

      {/* Buttons */}
      <div className="mt-6 flex justify-start gap-4">
        <button className="bg-[#3B76F6] hover:bg-[#2c67e8] text-white px-12 py-3 interfont rounded-md">
          Save
        </button>
        <button className="bg-[#EEEEEE] px-10 py-3 rounded-md interfont">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCourse;