import  { useState } from "react";
import "./Otpverification.css"; // Link to the CSS file

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2>Verify your phone <br/> number</h2>
        <p>
          We’ve sent an SMS with an activation code to <br/> your phone <span>+33 2 94 27 84 11</span>
        </p>
        <div className="otp-inputs">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              className="otp-input"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
            />
          ))}
        </div>
        <div className="otp-actions">
          <p>I didn’t receive a code</p>
          <button className="resend-btn">Resend</button>
        </div>
        <div className="otp-timer">
          <p>Send code again</p>
          <p>00:20</p>
        </div>
        <button
          className="verify-btn"
          onClick={() => alert(`Entered OTP is ${otp.join("")}`)}
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default Otp;
