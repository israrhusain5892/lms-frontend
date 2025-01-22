/* eslint-disable react/prop-types */
import { useState } from "react";
import "./popups.css";

const Popup = ({ title, description, status, onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleContinue = () => {
    if (onContinue) onContinue();
    setIsOpen(false);
  };

  return (
    <div>
      {/* Button to Open the Popup */}
      <button
        className="SubmitWithoutFinishingbutton m-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Submit Quiz
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-black">{title}</h2>
              
            </div>
            <p
              className={`text-sm mb-6 flex items-center ${
                status === "wrong"
                  ? "text-[#ef4444]"
                  : "text-gray-600"
              }`}
            >
              {status === "wrong" && (
                <span className="mr-2">
                <i className="fa-solid fa-circle-exclamation"></i>
                </span>
              )}
              {description}
            </p>
            <div className="flex justify-start gap-4">
              <button
                className="px-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={handleContinue}
              >
                Continue
              </button>
              <button
                className="px-10 py-2 text-blue-600 border border-blue-500 rounded hover:bg-blue-100"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
