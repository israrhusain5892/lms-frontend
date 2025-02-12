import Sidebar from './Components/AdminSidebar/AdminSidebar';
import "./index.css";
import StudentManagement from "./components/studentData/studentData";

function App() {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <StudentManagement/>
     

    </div>
  );
}

export default App;
