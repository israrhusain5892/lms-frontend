import Sidebar from './Components/AdminSidebar/AdminSidebar';
import "./index.css";
import StudentManagement from "./components/studentData/studentData";

function App() {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar Section */}
      <div className="w-1/4 bg-gray-100">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-gray-100 h-full">
        <StudentManagement />
      </div>
    </div>
  );
}

export default App;
