import Sidebar from './Components/AdminSidebar/AdminSidebar';
import BatchManagement from './components/Batch/Batch';
import "./index.css";
// import StudentManagement from "./components/studentData/studentData";
// import CourseManagement from './Components/CourseManagement/CourseManagement';
function App() {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      {/* <CourseManagement/> */}
     <BatchManagement/>

    </div>
  );
}

export default App;
