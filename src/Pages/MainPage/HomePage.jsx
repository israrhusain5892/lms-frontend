import HeroSection from "../../Components/HeroSection/HeroSection";
import Header from "../../Components/Header/Header";
import TrendingCourse from '../../Components/TrendingCourseSection/TrendingCourse';
// import "bootstrap/dist/css/bootstrap.min.css";
import TopTutors from  "../../Components/TopTutors/TopTutors";
import DiscountPage from "../../Components/Discount/DiscountPage";
import Footer from "../../Components/Footer/Footer";
import TopCourse from '../../Components/TopNewCourses/TopCourse';

const HomePage=()=>{



    return(
        <div>
            <Header/>
            <HeroSection/>
            <TrendingCourse/>
            <TopTutors/>
            <DiscountPage/>
            <TopCourse/>
            <Footer/>
          
        </div>
    )
}

export default HomePage;