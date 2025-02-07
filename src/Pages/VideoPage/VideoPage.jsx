import StudentDashboardLayout from "../../layouts/StudentDashboardLayout";
import DSACourse from "../../Components/DSA-Courses/DSACourses";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const VideoPage=()=>{

    return(
        <>
            <div className="web hidden md:block">
                  <StudentDashboardLayout>
                <DSACourse/>
               
             </StudentDashboardLayout>
            </div>
            <div className="mobile block md:hidden">
                  <Header/>
                 <DSACourse />
                 <Footer/>
            </div>
            </>
             
        
    )
}
export default VideoPage;