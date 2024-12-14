import  { useState } from 'react';
import './OtpVerification.css';

const OtpVerification = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [errorMessage, setErrorMessage] = useState('Wrong code, please try again');

    const handleChange = (value, index) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Automatically focus the next input
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text').split('');
        const newOtp = [...otp];
        pasteData.forEach((value, index) => {
            if (index < newOtp.length) {
                newOtp[index] = value;
            }
        });
        setOtp(newOtp);
    };
    


    return (
        <div className='otpBody'>
        <div className="otp-container">
            <div className="otp-box">
                <h2>Enter code</h2>
                <p>We’ve sent an SMS with an activation code to your phone +33 2 94 27 84 11</p>
                <div className="otp-inputs">
                    {otp.map((value, index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onPaste={handlePaste}
                            className="otp-input"
                        />
                    ))}
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className='outertext'>
                <p className="resend">Send code again</p>
                <p className="timer">00:20</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OtpVerification;
