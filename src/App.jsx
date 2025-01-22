// import './App.css';
import AssignmentCarousel from './Pages/OnBoarding/OnBoarding';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignUpPage from './Pages/SignupPage/SignUpPage';
import './App.css';
import OTPVerification from './Pages/OtpVerifyPage/OTPVerification';

function App() {
  return (
    <>
   
    <Router>
      <Routes>
        <Route path="/" element={<AssignmentCarousel />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp" element={<OTPVerification />} />
      </Routes>
    </Router>
      
    </>
  );
}

// const NextPage = () => {
//   return (
//     <div style={{ textAlign: 'center', marginTop: '100px' }}>
//       <h1>Welcome to the next page!</h1>
//       <p>This is where you land after clicking the "Skip" button.</p>
//     </div>
//   );
// };

export default App;