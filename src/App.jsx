
import CourseDetails from './components/CourseDetails/CourseDetails';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import TestsSection from './components/TestsSection/TestsSection';
// import Courses from "./components/CourseDetails/Courses"
 import CourseBody from './components/CourseBody/CourseBody';
 import 'bootstrap/dist/css/bootstrap.min.css';
import CourseHero from './components/CourseHero/CourseHero';

function App() {
  return (
    <>
        
         
           {/* <TestsSection/> */}
           <CourseHero/>
           {/* <Courses/> */}
           <CourseBody/>

           <Footer/>
        
    </>
  );
}



export default App;
