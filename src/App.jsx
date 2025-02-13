import Sidebar from './Components/AdminSidebar/AdminSidebar';
import "./index.css";
import AddCourse from './components/AddCourse/AddCourse';
function App() {
  return (
    <div className="flex flex-row">
      <Sidebar/>
      <AddCourse/>
     

    </div>
  );
}

export default App;
