import { useNavigate } from 'react-router-dom';
import './otp-verify.css';
import { useRef ,useState,useEffect} from 'react';

function OTPVerification() {

    const inputRefs = [useRef(null), useRef(null), useRef(null),useRef(null),useRef(null),useRef(null),];
    const [values, setValues] = useState(["", "", "","","",""]);
    const otp=values.join("")
    const navigate=useNavigate();
    console.log(otp)
    useEffect(()=>{
          if(otp.length===6){
             navigate("/otp-verify",{state:{otp:otp}})
          }
    },[otp])
  const handleInput = (e, index) => {
    const newValue = e.target.value;
    if (newValue.length <= 1) {
      // Update state
      const updatedValues = [...values];
      updatedValues[index] = newValue;
      setValues(updatedValues);

      // Move to next input if value is entered
      if (newValue && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      // Move to previous input on Backspace
      inputRefs[index - 1].current.focus();
    }
  };

    return (
        <main className="OTPVerificationMain">
            <section className="OTPVerificationSection">
                <div className="OTPVerificationContentContainer">
                    <header className="OTPVerificationHeader">
                        <h1 className="OTPVerificationTitle">Enter Code</h1>
                        <p className="OTPVerificationDescription">We’ve sent an SMS with an activation code to your phone <span>+33 2 94 27 84 11</span></p>
                    </header>

                    <form action="" className="OTPVerificationForm">
                        <fieldset className="OTPVerificationFormFieldset">
                            <div className="OTPVerificationInputContainer">
                                {inputRefs.map((ref, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        ref={ref}
                                        onInput={(e) => handleInput(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                       className="userOTPInput"
                                    />
                                ))}
                                {/* Todo: Conditionally handle adding a an error class when invalid otp is entered. */}
                                {/* <input
                                    type="text"
                                    className="userOTPInput"
                                    name="1"
                                    maxLength="1"
                                    ref={ref}
                                    onInput={(e) => moveToNext(e, input1)}
                                />
                                <input
                                    type="text"
                                    className="userOTPInput"
                                    name="2"
                                    maxLength="1"
                                    ref={input2}
                                    onInput={(e) => moveToNext(e, input2)}
                                />
                                <input
                                    type="text"
                                    className="userOTPInput"
                                    maxLength="1"
                                    ref={input3}
                                    onInput={(e) => moveToNext(e, input3)}
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                    ref={input4}
                                    onInput={(e) => moveToNext(e, input4)}
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                    ref={input5}
                                    onInput={(e) => moveToNext(e, input5)}
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                    ref={input6}
                                    onInput={(e) => moveToNext(e, input6)}
                                /> */}
                            </div>
                        </fieldset>
                    </form>
                </div>

                {/*
                <p>
                    Error text!
                </p>
                */}

                <footer className="OTPVerificationFooter">
                    {/* Todo: Refactor the following into an actionable link that re-sends otp  */}
                    <p className="OTPVerificationFooterText">Send code again</p>
                    {/* Todo: Refactor the following to display a live timer */}
                    <p className="OTPVerificationFooterTimer">00:20</p>
                </footer>

            </section>
        </main>
    )
}

export default OTPVerification;