import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";

const StudentDashboardLayout = ({ children }) => {
  return (
    <div className="md:d-flex md:flex-column md:min-vh-100">
      <Header />
      <div className="d-flex flex-grow-1 align-items-start justify-content-between">
        <SideBar />
        <main className="md:w-[70%] md:p-3">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboardLayout;
