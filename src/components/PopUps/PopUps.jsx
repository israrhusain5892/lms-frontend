/* eslint-disable react/prop-types */
import "./popups.css";

const Popup = ({ title, description, status, onContinue, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 zIndex-100">
        <h2 className="text-xl font-bold text-black mb-4 w-100">{title}</h2>
        <p
          className={`text-sm mb-6 flex items-center  ${
            status === "wrong" ? "text-[#ef4444]" : "text-gray-600"
          }`}
        >
          {status === "wrong" && (
            <i className="fa-solid fa-circle-exclamation mr-2"></i>
          )}
          {description}
        </p>
        <div className="flex justify-start gap-4">
          <button
            className="px-10 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onContinue}
          >
            Continue
          </button>
          <button
            className="px-10 py-2 text-blue-600 border border-blue-500 rounded hover:bg-blue-100"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
