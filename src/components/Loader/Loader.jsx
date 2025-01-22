import { useState ,useEffect} from "react";
import './loader.css'; // CSS file for Loader

const EvaluationPopup = () => {
  const [isEvaluating, setIsEvaluating] = useState(false);


  useEffect(() => {
    setIsEvaluating(true);
  }, [])
  

  return (
    <div className="m-4">
      {/* Button to Trigger Evaluation */}
      

      {/* Evaluation Popup */}
      {isEvaluating && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center max-w-sm w-full">
            {/* Custom CSS Loader */}
            <div className="loader"></div>
            <div>
            {/* Heading */}
            <h2 className="text-lg font-bold text-black mb-2">
              Evaluating Your Submission...
            </h2>
            
            {/* Subtext */}
            <p className="text-sm text-start text-[#555]">
              Hang on! This won&apos;t take long.
            </p>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EvaluationPopup;
