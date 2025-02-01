import HeroSection from "../../Components/HeroSection/HeroSection";
import Header from "../../Components/Header/Header";
import TrendingCourse from '../../Components/TrendingCourseSection/TrendingCourse';
// import "bootstrap/dist/css/bootstrap.min.css";
import TopTutors from  "../../Components/TopTutors/TopTutors";
// ../../Components/TopTutors/TopTutors
const HomePage=()=>{



    return(
        <div>
            <Header/>
            <HeroSection/>
            <TrendingCourse/>
            <TopTutors/>
          
        </div>
    )
}

export default HomePage;