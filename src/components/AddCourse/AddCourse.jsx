
import { useState } from "react";
import "./addcourse.css";
import defaultimg from "../../assets/images/thumbnail.jpg";
import { Trash2 } from "lucide-react"
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


  const availableModules = ["Module 1", "Module 2", "Module 3", "Module 4"];
  const [selectedModules, setSelectedModules] = useState(["Module 1"]);
  const [studentLearnings, setStudentLearnings] = useState([""]);

  // Add more course modules
  const handleAddModule = () => {
    setSelectedModules([...selectedModules, "Module 1"]);
  };

  // Remove a specific module
  const handleRemoveModule = (index) => {
    setSelectedModules(selectedModules.filter((_, i) => i !== index));
  };

  // Add more fields for what students will learn
  const handleAddLearning = () => {
    setStudentLearnings([...studentLearnings, ""]);
  };

  // Remove a learning field
  const handleRemoveLearning = (index) => {
    setStudentLearnings(studentLearnings.filter((_, i) => i !== index));
  };
  return (
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#141C24] ralwayfont mb-4 underline underline-offset-8 decoration-[#D0D0D0]">
        Add New Course
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-[80%]">
        {/* Course Name */}
        <div>
          <label className="block text-lg font-bold text-[#1E1E1E]">Course Name</label>
          <input
            type="text"
            placeholder="Enter course name"
            className="mt-1 w-full p-2 border rounded-md ralwayfont font-semibold"
          />
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-lg font-bold text-[#1E1E1E]">Thumbnail</label>
          <div className="border p-2 rounded-md flex flex-col lg:flex-row gap-2 items-center">
            <img
              src={thumbnail || defaultimg}
              alt="Thumbnail"
              className="w-30 h-20 mr-2 rounded"
            />
            
            <div className="flex flex-col items-center">
              {thumbnail ? (
                <>
                  <span className="font-semibold text-[#686868]">{thumbnailName}</span>
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
                    onClick={() => document.getElementById("thumbnailInput").click()}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Upload Thumbnail
                  </button>
                  <input
                    id="thumbnailInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleThumbnailChange}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Course Includes */}
      <div className="mt-4 md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">This Course Includes</label>
        <select className="mt-1 w-full p-2 border rounded-md ralwayfont font-semibold">
          <option>Select</option>
          <option>Videos</option>
          <option>Assignments</option>
          <option>Quizzes</option>
          <option>Live Sessions</option>
          <option>Certificate of Completion</option>
        </select>
      </div>

      {/* Description */}
      <div className="mt-4 md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">Description</label>
        <textarea
          placeholder="Enter course description"
          className="mt-1 w-full p-2 border ralwayfont font-semibold rounded-md"
          rows="3"
        ></textarea>
      </div>

      {/* About this Course */}
      <div className="mt-4 md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">About this Course</label>
        <textarea
          placeholder="Enter document description"
          className="mt-1 w-full p-2 border rounded-md font-semibold"
          rows="3"
        ></textarea>
      </div>

      {/* Tags */}
      <div className="mt-4 md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">Tags</label>
        <div className="mt-1 border p-2 rounded-md">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-100 px-2 py-1 rounded-md text-sm flex items-center"
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

          {/* Input field to add new tags */}
          <input
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            onKeyPress={handleAddTag}
            placeholder="Press Enter to add a tag"
            className="mt-2 w-full p-2 border rounded-md text-sm"
          />
        </div>
        </div>

      {/* Course Material Section */}
      <div className="mt-4 flex justify-between items-center md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">Course Material</label>
        <button onClick={handleAddModule} className="text-[#3B76F6] font-medium text-base">
          Add More
        </button>
      </div>

      {selectedModules.map((module, index) => (
        <div key={index} className="relative mt-2 md:w-4/5 flex items-center gap-2">
          <select
            value={module}
            onChange={(e) => {
              const newModules = [...selectedModules];
              newModules[index] = e.target.value;
              setSelectedModules(newModules);
            }}
            className="w-full p-2 border rounded-md ralwayfont font-semibold"
          >
            {availableModules.map((mod, i) => (
              <option key={i} value={mod}>
                {mod}
              </option>
            ))}
          </select>
          {selectedModules.length > 1 && (
            <button className="text-red-500" onClick={() => handleRemoveModule(index)}>
              <Trash2 size={18} />
            </button>
          )}
        </div>
      ))}

      {/* What students will learn */}
      <div className="mt-4 flex justify-between items-center md:w-4/5">
        <label className="block text-lg font-bold text-[#1E1E1E]">What students will learn</label>
        <button onClick={handleAddLearning} className="text-[#3B76F6] font-medium text-base">
          Add More
        </button>
      </div>

      {studentLearnings.map((learning, index) => (
        <div key={index} className="relative mt-2 md:w-4/5">
          <input
            type="text"
            value={learning}
            onChange={(e) => {
              const newLearnings = [...studentLearnings];
              newLearnings[index] = e.target.value;
              setStudentLearnings(newLearnings);
            }}
            placeholder="Enter course name"
            className="w-full p-2 border rounded-md ralwayfont font-semibold"
          />
          {studentLearnings.length > 1 && (
            <button
              className="absolute right-2 top-2 text-red-500"
              onClick={() => handleRemoveLearning(index)}
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      ))}

      {/* Buttons */}
      <div className="mt-6 flex justify-start gap-4">
        <button className="bg-[#3B76F6] text-white px-12 py-3 interfont rounded-md">Save</button>
        <button className="bg-[#EEEEEE] px-10 py-3 rounded-md interfont">Cancel</button>
      </div>
    </div>
  );
};

export default AddCourse;
