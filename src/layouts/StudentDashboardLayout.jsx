import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SideBar from "../Components/SideBar/SideBar";

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
