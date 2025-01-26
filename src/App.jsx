// import './App.css';
import AssignmentCarousel from './Pages/OnBoarding/OnBoarding';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignUpPage from './Pages/SignupPage/SignUpPage';
// import './App.css';
import OTPVerification from './Pages/OtpVerifyPage/OTPVerification';
import OtpVerify from './Pages/OtpVerify/OtpVerify';
import SuccsessPage from './Pages/SuccessPage';
// import ProgressBar from './components/ProgressBar/ProgressBar';
function App() {
  return (
    <div style={{ width: '100%' }}>

      <Router>
        <Routes>
          <Route path="/" element={<AssignmentCarousel />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/otp-verify" element={<OtpVerify />} />
          <Route path="/successPage" element={<SuccsessPage/>} />
          
        </Routes>
      </Router>
    </div>
  )
}


export default App;

