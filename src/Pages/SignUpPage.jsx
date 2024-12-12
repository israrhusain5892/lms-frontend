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
                    {/* All form related stuff */}
                    <div>
                        {/* Core form elements */}
                    </div>

                    <p>
                        {/* Don't have an account... */}
                    </p>

                    <button>
                        {/* Get Code btn */}
                    </button>
                </form>

                <footer>
                    {/* Register with Google btn */}
                </footer>
            </section>
        </main>
    )
}

export default SignUpPage;