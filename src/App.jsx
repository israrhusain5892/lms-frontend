
import './App.css'
import CourseHero from './Components/CourseHero';

// import OtpVerification from './pages/OtpVerification';
import Header from './Components/Header';
// import Loginpage from './Pages/Loginpage';

import "react-responsive-carousel/lib/styles/carousel.min.css";


function App() {
  

  return (
    <>
        
           <Header/>
           {/* <OtpVerification/> */}
           {/* <Loginpage/> */}
           <CourseHero/>
        
    </>
  )
}

export default App