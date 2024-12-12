import { useState } from "react";
import logo from "../Images/google-logo.png";

function SignUpPage() {
    const [userMobileNumber, setUserMobileNumber] = useState(""); // To store an manage user's mobile number
    const [errorMessage, setErrorMessage] = useState("");

    const handleUserMobileChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setUserMobileNumber(value);
            setErrorMessage("");
        } else {
            setErrorMessage("Please enter a valid 10-digit mobile number.");
        }
    };

    const handleUserMobilePhoneSubmit = (e) => {
        e.preventDefault();
        // Backend integration here
        console.log(`User's mobile number: ${userMobileNumber}`);
    };


    return (
        <main className="signUpMain">
            <section className="signUpSection">
                <header className="signUpHeader">
                    <h1 className="signUpTitle">Create Account</h1>
                    <p className="signUpDescription">We have sent you an <strong>One Time Password (OTP)</strong> on this mobile number.</p>
                </header>

                <form action="" className="signUpForm" onSubmit={handleUserMobilePhoneSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="userMobileNumber">Enter mobile no.*</label>
                        </div>

                        <div className="inputRow">
                            <select id="countryCode" name="countryCode" defaultValue="+91">
                                <option value="+91">+91</option> {/* India */}
                                <option value="+92">+92</option> {/* Pakistan */}
                                <option value="+92">+94</option> {/* Sri Lanka */}
                                <option value="+92">+95</option> {/* Mayanmar */}
                                <option value="+92">+977</option> {/* Nepal */}
                                {/* Refactor to generate automatically if need to display all codes. */}
                            </select>
                            <input
                                type="tel"
                                id="userMobileNumber"
                                name="userMobileNumber"
                                value={userMobileNumber}
                                onChange={handleUserMobileChange}
                                required
                            />
                        </div>
                        {errorMessage && <p className="errorText">{errorMessage}</p>}
                    </fieldset>

                    {/* Refactor later to use "Link" */}
                    <p>
                        Don’t have an account? <a href="#">Continue without account</a>
                    </p>

                    <button type="submit" className="getCodeButton">
                        Get Code
                    </button>
                </form>

                <footer className="signUpFooter">
                    <p>Or Register with</p>
                    <button >
                        <img src={logo} alt="Google Logo" />
                    </button>
                </footer>
            </section>
        </main>
    )
}

export default SignUpPage;