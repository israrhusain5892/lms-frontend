/* eslint-disable no-unused-vars */
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


// import CourseHero from './components/CourseHero/CourseHero';
import CourseDetailPage from './Pages/CourseDetailPage/CourseDetailPage';
// import HeroSection from './components/HeroSection/HeroSection'
import HomePage from './Pages/MainPage/HomePage';
// import TrendingCourse from './Components/TopNewCourses/TopCourse';

import StudentDashboard from './layouts/StudentDashboardLayout';
// import StudentVideoDashboard from './Pages/VideoPage/VideoPage';

// import AnnouncementPage from './Components/AnnouncementPage/AnnouncementPage';

import DSACourse from './Components/DSA-Courses/DSACourses';
// import CourseCard from './components/CourseCard/CourseCard';
import FolderPage from './Pages/FolderReading/FolderPage';
import AnnouncementPage from './Pages/AnnouncementPage/AnnouncementPage';
import VideoPage from './Pages/VideoPage/VideoPage';
function App() {
  return (
    <div style={{ width: '100%' }} >

    <Router>
      <Routes>
        <Route path="/" element={<AssignmentCarousel />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/otp-verify" element={<OtpVerify />} />
        <Route path="/successPage" element={<SuccsessPage/>} />
        <Route path="/course-detail" element={<CourseDetailPage/>} />
        <Route path="/dashboard" element={<StudentDashboard/>} />
        <Route path="/home" element={<HomePage/>} />
       <Route path="/clips" element={<VideoPage/>} />
       <Route path="/folder" element={<FolderPage/>} />
       <Route path="/announcements" element={<AnnouncementPage/>} />



        <Route path="/folder" element={<FolderPage />} />
        <Route path="/DSACourse" element={<StudentDashboard><DSACourse /></StudentDashboard>} />
        <Route path="/Announcement" element={<StudentDashboard><AnnouncementPage /></StudentDashboard>} />
       
      </Routes>
    </Router>
     
  </div>

  )
}


export default App;

