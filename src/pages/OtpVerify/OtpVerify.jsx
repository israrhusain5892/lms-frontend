import { useState } from "react"; // Importing useState hook for state management
import "./otp-veri.css"; // Linking to the CSS file for styling
import { useLocation,useNavigate } from 'react-router-dom';
import ProgresssBar from "../../components/ProgressBar/ProgressBar";

const OtpVerify = () => {
  const location = useLocation();
  const { state } = location;
  const [otp, setOtp] = useState(new Array(6).fill()); // State to store 6-digit OTP input
  const[showProgress,setShowProgress]=useState(false)
    const navigate=useNavigate()
  // Handles changes in the OTP input fields
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // Prevent non-numeric input
    
    let newOtp = [...otp]; // Create a copy of the OTP array
    newOtp[index] = element.value; // Update the specific index with the new value
    setOtp(newOtp); // Update the state

    // Focus the next input field if available
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const verifyOtp=(e)=>{
    e.preventDefault();
    setShowProgress(true);
    setTimeout(()=>{
       setShowProgress(false)
       navigate("/successPage")
    },5000)
  }

  return (
    <div className="otp-container"> {/* Main container for the OTP form */}
    {
        showProgress && <ProgresssBar/>
    }
       
      <div className="otp-box"> {/* Box containing all OTP elements */}
        <h2>Verify your phone <br /> number</h2>
        <p>
          We’ve sent an SMS with an activation code to <br /> your phone{" "}
          <span>+33 2 94 27 84 11</span>
        </p>
        {/* Input fields for OTP */}
        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              key={index} // Unique key for each input field
              type="text" // Single-character input field
              maxLength="1" // Limit input to one character
              className="otp-input" // Styling class for input
              value={data} // Bind value to state
              onChange={(e) => handleChange(e.target, index)} // Handle changes
            />
          ))}
        </div>
        {/* Actions and Resend Button */}
        <div className="otp-actions">
          <p>I didn’t receive a code</p>
          <button  className="resend-btn">Resend</button>
        </div>
        {/* Static Timer */}
        <div className="otp-timer">
          <p>Send code again</p>
          <p>00:20</p>
        </div>
        {/* Verify Button */}
        <button
          className="verify-btn"
          onClick={verifyOtp} // Alert concatenated OTP
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default OtpVerify; // Exporting the component for reuse
