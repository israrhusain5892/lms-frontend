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
                    {/* Main Page Header */}
                </header>

                <form action="">
                    {/* All form related stuff */}
                </form>

                <footer>
                    {/* Register with Google btn */}
                </footer>
            </section>
        </main>
    )
}

export default SignUpPage;