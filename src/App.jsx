import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import CoursePage from "./components/CourseDetails/Courses";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<CourseDetails />} />
        <Route path="/courses/:id" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
