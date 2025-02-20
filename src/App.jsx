// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssignmentCarousel from './pages/OnBoarding/OnBoarding';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SignUpPage from './pages/SignupPage/SignUpPage';
import './App.css';
import OTPVerification from './pages/OtpVerifyPage/OTPVerification';
import OtpVerify from './pages/OtpVerify/OtpVerify';
import SuccsessPage from './pages/SuccessPage';

// import CourseHero from './components/CourseHero/C';
import CourseDetailPage from './pages/CourseDetailPage/CourseDetailPage';
import HeroSection from './components/HeroSection/HeroSection'
import HomePage from './pages/MainPage/HomePage';
import TrendingCourse from './components/TopNewCourses/TopCourse';
import StudentDashboard from './Pages/VideoPage/VideoPage';
// import CourseCard from './components/CourseCard/CourseCard';
import FolderPage from './pages/FolderReading/FolderPage';
import AnnouncementPage from './Pages/AnnouncementPage/AnnouncementPage';
import VideoPage from './pages/VideoPage/VideoPage';
import VideoLecturePage from './pages/VideoLecturePage/VideoLecturePage';
import TestPage from './pages/TestPage/TestPage';
import QuizPage from './pages/QuizPage/QuizPage';
import TasksPage from './pages/TaskPage/TaskPage';
import QuizResultPage from './pages/QuizResultPage/QuizResultPage';
import MidtermTest from './pages/MidTermTest/MidtermTest';
import NotificationPage from './pages/Notification/NotificationPage';
import CourseMaterial from './pages/CourseMaterial/CourseMaterial';
import Courses from './pages/CourseMaterial/Courses';
function App() {
  return (
    <div style={{ width: '100%' }} >

      <Router>
        <Routes>
          <Route path="/" element={<AssignmentCarousel />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/otp-verify" element={<OtpVerify />} />
          <Route path="/successPage" element={<SuccsessPage />} />
          <Route path="/course-detail" element={<CourseDetailPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/Clips" element={<VideoPage />} />
          <Route path="/reading" element={<FolderPage />} />
          <Route path="/Announcements" element={<AnnouncementPage />} />
          <Route path="/lecture" element={<VideoLecturePage />} />
          <Route path="/Tests" element={<TestPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/Task" element={<TasksPage />} />
          <Route path="/QuizResultPage" element={<QuizResultPage />} />
          <Route path="/midterm" element={<MidtermTest />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/material/:id" element={<CourseMaterial />} />
          <Route path="/courses/:id" element={<Courses />} />
        </Routes>
      </Router>

    </div>
  )
}
export default App;
