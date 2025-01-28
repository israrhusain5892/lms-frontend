import CourseHero from "../../components/CourseHero/CourseHero";
import CourseBody from "../../components/CourseBody/CourseBody";
import Footer from "../../components/Footer/Footer";


 const CourseDetailPage=()=>{
      
     return(
        <div>
               
           {/* <TestsSection/> */}
           <CourseHero/>
           {/* <Courses/> */}
           <CourseBody/>

           <Footer/>
        </div>
     )
}
export default CourseDetailPage