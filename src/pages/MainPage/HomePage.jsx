import HeroSection from "../../components/HeroSection/HeroSection";
import Header from "../../components/Header/Header";
import TrendingCourse from '../../components/TrendingCourseSection/TrendingCourse';
// import "bootstrap/dist/css/bootstrap.min.css";
import TopTutors from  "../../components/TopTutors/TopTutors";
import DiscountPage from "../../components/Discount/DiscountPage";
import Footer from "../../components/Footer/Footer";
import TopCourse from '../../components/TopNewCourses/TopCourse';

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