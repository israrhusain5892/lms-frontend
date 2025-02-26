import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";

const StudentDashboardLayout = ({ children }) => {
  return (
    <div className="md:d-flex md:flex-column md:min-vh-100">
      <Header />
      <div className="d-flex md:flex-grow-1 align-items-start justify-content-between">
        <SideBar />
        <main className="md:w-[70%] w-full  md:p-3 md:mt-0 mt-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboardLayout;
