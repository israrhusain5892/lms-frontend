import { useState } from "react";

function SignUpPage() {
    const [userMobileNumber, setUserMobileNumber] = useState(""); // To store an manage user's mobile number

    const handleUserMobileChange = (e) => {
        setUserMobileNumber(e.target.value);
    };
}

export default SignUpPage;