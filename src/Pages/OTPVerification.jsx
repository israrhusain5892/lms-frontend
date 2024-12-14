function OTPVerification() {
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
                                {/* Todo: Conditionally handle adding a an error class when invalid otp is entered. */}
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                />
                                <input
                                    type="number"
                                    className="userOTPInput"
                                    maxLength="1"
                                />
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