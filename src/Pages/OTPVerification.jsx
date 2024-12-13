function OTPVerification() {
    
    return (
        <main className="OTPVerificationMain">
            <section className="OTPVerificationSection">

                <header className="OTPVerificationHeader">
                    <h1 className="OTPVerificationTitle">Enter Code</h1>
                    <p className="OTPVerificationDescription">We’ve sent an SMS with an activation code to your phone +33 2 94 27 84 11</p>
                </header>

                <form action="" className="OTPVerificationForm">
                    <fieldset className="OTPVerificationFormFieldset">
                        <div className="OTPVerificationInputContainer">
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
                        {/* Error message here */}
                    </fieldset>
                </form>

                <footer className="OTPVerificationFooter">
                    <p className="OTPVerificationFooterText">Send code again</p>
                    <p className="OTPVerificationFooterTimer">00:20</p>
                    {/* Handle a dynamic timer later */}
                </footer>

            </section>
        </main>
    )
}

export default OTPVerification;