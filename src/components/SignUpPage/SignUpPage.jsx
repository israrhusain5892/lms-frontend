import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Assuming React Router is used
import googleLogo from "../../assets/images/google-logo.png";
import "./sign-up-page.css";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtJlWQZzSMapkjEpF7c2JDTUSt7B4_6gY",
  authDomain: "datasite-de27e.firebaseapp.com",
  projectId: "datasite-de27e",
  storageBucket: "datasite-de27e.firebasestorage.app",
  messagingSenderId: "540566985581",
  appId: "1:540566985581:web:e95bead91246fb1662d864",
  measurementId: "G-V1PSGR6V6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function SignUpPage() {
    const [userMobileNumber, setUserMobileNumber] = useState(""); // To store and manage user's mobile number
    const [isMobileValid, setIsMobileValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate(); // For navigation

    const auth = getAuth(app); // Initialize Firebase Auth
    const provider = new GoogleAuthProvider(); // Initialize Google Provider

    // Handle mobile number validation
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

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log("User signed in:", user);
            // Redirect to another component/page
            navigate("/home"); // Change "/dashboard" to your desired route
        } catch (error) {
            console.error("Error during Google sign-in:", error.message);
        }
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
                            <form action="" className="signUpForm">
                                <fieldset className="signUpFormFieldset">
                                    <div className="signUpFormLabelContainer">
                                        <label htmlFor="userMobileNumber" className="signUpFormLabel">Enter mobile no.*</label>
                                    </div>

                                    <div className="signUpFormInputContainer">
                                        <select id="countryCode" name="countryCode" defaultValue="+91" className="signUpFormCountryCodeSelect">
                                            <option value="+91" className="signUpFormCountryCodeOption">+91</option> {/* India */}
                                            <option value="+92" className="signUpFormCountryCodeOption">+92</option> {/* Pakistan */}
                                            <option value="+94" className="signUpFormCountryCodeOption">+94</option> {/* Sri Lanka */}
                                            <option value="+95" className="signUpFormCountryCodeOption">+95</option> {/* Myanmar */}
                                            <option value="+977" className="signUpFormCountryCodeOption">+977</option> {/* Nepal */}
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
                    <button
                        className="signUpFooterGoogleLogoButton"
                        onClick={handleGoogleSignIn}
                    >
                        <img src={googleLogo} alt="Google Logo" className="signUpFooterGoogleLogo" />
                    </button>
                </footer>
            </section>
        </main>
    );
}

export default SignUpPage;
