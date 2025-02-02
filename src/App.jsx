// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentCarousel from './Pages/OnBoarding/OnBoarding';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignUpPage from './Pages/SignupPage/SignUpPage';
import './App.css';
import OTPVerification from './Pages/OtpVerifyPage/OTPVerification';
import OtpVerify from './Pages/OtpVerify/OtpVerify';
import SuccsessPage from './Pages/SuccessPage';
// import ProgressBar from './components/ProgressBar/ProgressBar';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import TestsSection from './components/TestsSection/TestsSection';
// import Courses from "./components/CourseDetails/Courses"
 import CourseBody from './components/CourseBody/CourseBody';

import CourseHero from './components/CourseHero/CourseHero';
import CourseDetailPage from './Pages/CourseDetailPage/CourseDetailPage';
import HeroSection from './components/HeroSection/HeroSection'
import HomePage from './Pages/MainPage/HomePage';
import TrendingCourse from './Components/TopNewCourses/TopCourse';
// import CourseCard from './components/CourseCard/CourseCard';
function App() {
  return (
    <div style={{width:'100%'}} >

    <Router>
      <Routes>
        <Route path="/" element={<AssignmentCarousel />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/successPage" element={<SuccsessPage/>} />
        <Route path="/course-detail" element={<CourseDetailPage/>} />
        <Route path="/home" element={<HomePage/>} />
       
      </Routes>
    </Router>
     
  </div>
  )
}


export default App;

