import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SideBar from "../Components/SideBar/SideBar";

const StudentDashboardLayout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1">
        <SideBar />
        <main className="flex-grow-1 p-3">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboardLayout;
