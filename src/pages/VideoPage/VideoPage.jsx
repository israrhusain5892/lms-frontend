import StudentDashboardLayout from "../../layouts/StudentDashboardLayout";
import DSACourse from "../../components/DSA-Courses/DSACourses";
// import Footer from "../../Components/Footer/Footer";
// import Header from "../../Components/Header/Header";

const VideoPage=()=>{

    return(
        <>
            <div className="">
                  <StudentDashboardLayout>
                <DSACourse/>
               
             </StudentDashboardLayout>
            </div>
            {/* <div className="mobile block md:hidden">
                 
                 <DSACourse />
                 <Footer/>
            </div> */}
            </>
             
        
    )
}
export default VideoPage;