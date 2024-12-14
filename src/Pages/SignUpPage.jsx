import { useState } from "react";
import googleLogo from "../Images/google-logo.png";

function SignUpPage() {
    const [userMobileNumber, setUserMobileNumber] = useState(""); // To store an manage user's mobile number
    const [isMobileValid, setIsMobileValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleUserMobileChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setUserMobileNumber(value);
            setErrorMessage("");

            if (value.length === 10) {
                setIsMobileValid(true);
            } else {
                setIsMobileValid(false);
            }

        } else {
            setErrorMessage("Please enter a valid 10-digit mobile number.");
            setIsMobileValid(false);
        }
    };

    // BACKEND
    const handleUserMobilePhoneSubmit = (e) => {
        e.preventDefault();

        // Backend integration here

        console.log(`User's mobile number: ${userMobileNumber}`);
    };


    return (
        <main className="signUpMain">
            <section className="signUpSection">
                <div className="signUpContentContainer">
                    <div className="signUpContent">
                        <header className="signUpHeader">
                            <h1 className="signUpTitle">Create Account</h1>
                            <p className="signUpDescription">We have sent you a <strong>One Time Password (OTP)</strong> on this mobile number.</p>
                        </header>

                        <div className="signUpFormContainer">
                        <form action="" className="signUpForm" onSubmit={handleUserMobilePhoneSubmit}>
                            <fieldset className="signUpFormFieldset">
                                <div className="signUpFormLabelContainer">
                                    <label htmlFor="userMobileNumber" className="signUpFormLabel">Enter mobile no.*</label>
                                </div>

                                <div className="signUpFormInputContainer">
                                    <select id="countryCode" name="countryCode" defaultValue="+91" className="signUpFormCountryCodeSelect">
                                        <option value="+91" className="signUpFormCountryCodeOption">+91</option> {/* India */}
                                        <option value="+92" className="signUpFormCountryCodeOption">+92</option> {/* Pakistan */}
                                        <option value="+92" className="signUpFormCountryCodeOption">+94</option> {/* Sri Lanka */}
                                        <option value="+92" className="signUpFormCountryCodeOption">+95</option> {/* Mayanmar */}
                                        <option value="+92" className="signUpFormCountryCodeOption">+977</option> {/* Nepal */}
                                        {/* Refactor to generate automatically if need to display all codes. */}
                                    </select>
                                    <input
                                        type="tel"
                                        id="userMobileNumber"
                                        className="signUpFormUserMobileNumberInput"
                                        name="userMobileNumber"
                                        value={userMobileNumber}
                                        onChange={handleUserMobileChange}
                                        required
                                    />
                                </div>
                                {errorMessage && <p className="signUpFormErrorText">{errorMessage}</p>}
                            </fieldset>
                        </form>

                        {/* Refactor later to use "Link" */}
                        <p>
                            Don’t have account? <a href="#">Continue without account</a>
                        </p>

                        </div>
                    </div>

                    <div className="signUpFormGetCodeButtonContainer">
                        <button type="submit" className="signUpFormGetCodeButton" disabled={!isMobileValid}>
                            Get Code
                        </button>
                    </div>
                </div>

                <footer className="signUpFooter">
                    <p className="signUpFooterText">Or Register with</p>
                    <button className="signUpFooterGoogleLogoButton">
                        <img src={googleLogo} alt="Google Logo" className="signUpFooterGoogleLogo" />
                    </button>
                </footer>
            </section>
        </main>
    )
}

export default SignUpPage;