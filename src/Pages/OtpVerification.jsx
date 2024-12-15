import { useState } from "react"; // Importing useState hook for state management
import "./Otpverification.css"; // Linking to the CSS file for styling

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // State to store 6-digit OTP input

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

  return (
    <div className="otp-container"> {/* Main container for the OTP form */}
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
          <button className="resend-btn">Resend</button>
        </div>
        {/* Static Timer */}
        <div className="otp-timer">
          <p>Send code again</p>
          <p>00:20</p>
        </div>
        {/* Verify Button */}
        <button
          className="verify-btn"
          onClick={() => alert(`Entered OTP is ${otp.join("")}`)} // Alert concatenated OTP
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Otp; // Exporting the component for reuse
