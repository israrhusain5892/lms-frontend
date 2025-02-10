import { useState, useEffect } from "react";
import "./loader.css"; // CSS file for Loader

const EvaluationPopup = () => {
  const [isEvaluating, setIsEvaluating] = useState(false);

  useEffect(() => {
    setIsEvaluating(true);
  }, []);

  return (
    <div className="m-4">
      {/* Evaluation Popup */}
      {isEvaluating && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg sm:p-8 p-4 flex flex-col items-center max-w-lg w-full">
            {/* Custom CSS Loader */}
            <div className="loader w-12 h-12 sm:w-16 sm:h-16 mb-4"></div>

            {/* Text Section */}
            <h2 className="text-lg sm:text-xl font-bold text-black mb-2 text-center sm:text-left">
              Evaluating Your Submission...
            </h2>
            <p className="text-sm sm:text-base text-[#555] text-center sm:text-left">
              Hang on! This won&apos;t take long.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationPopup;
