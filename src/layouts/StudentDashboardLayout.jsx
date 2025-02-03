import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../Components/SideBar/SideBar";

const StudentDashboardLayout=({children})=>{
      return(
          <div>
                <Header/>
                <div className="d-flex  ">

                <SideBar/>
                
               
                {
                    children
                }

                </div>
                
                <Footer/>
          </div>
      )
}
export default StudentDashboardLayout;