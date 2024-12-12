import { useState } from "react";

function SignUpPage() {
    const [userMobileNumber, setUserMobileNumber] = useState(""); // To store an manage user's mobile number

    const handleUserMobileChange = (e) => {
        setUserMobileNumber(e.target.value);
    };

    return (
        <main>
            <section>
                <header>
                    <h1>Create Account</h1>
                    <p>We have sent you an <strong>One Time Password (OTP)</strong> on this mobile number.</p>
                </header>

                <form action="">
                    <fieldset>
                        <div>
                            <label htmlFor="userMobileNumber">Enter mobile no.*</label>
                        </div>

                        <div>
                            <select id="countryCode" name="countryCode">
                                <option value="+91" selected>+91</option> {/* India */}
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
                    </fieldset>

                    {/* Refactor later to use "Link" */}
                    <p>
                        Don’t have an account? <a href="#">Continue without account</a>
                    </p>

                    <button type="submit">
                        GET CODE
                    </button>
                </form>

                <footer>
                    <p>Or Register with</p>
                    <button >
                        {/* Place Google Icon */}
                    </button>
                </footer>
            </section>
        </main>
    )
}

export default SignUpPage;