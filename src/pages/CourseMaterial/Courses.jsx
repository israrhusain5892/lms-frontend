
import courseData from "../../utils/courseMaterials/coursedata.json"; // Assuming your JSON is in the same directory
import "./coursedetails.css";
import pdf from "../../assets/images/pdf.png";
import StudentDashboardLayout from "../../layouts/StudentDashboardLayout";
const Courses = () => {
  return (
    <StudentDashboardLayout>
    <div className="p-6 bg-white text-gray-800 ">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-black mb-4">{courseData.courseTitle}</h1>

      {/* Map through sections */}
      {courseData.sections.map((section) => (
        <section key={section.id} className="mb-6">
          <h2 className="text-2xl font-semibold text-[#0F172A] mb-2">{section.title}</h2>
          <p className="text-[#475569] text-xl">{section.content}</p>

          {/* If there are lists */}
          {section.list && (
            <ul className={`list-${section.id % 2 === 0 ? 'disc' : 'decimal'} pl-5 text-gray-600`}>
              {section.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {/* If there is a PDF link */}
          {section.pdfLink && (

            <div className="flex justify-start items-center mt-4">
            <img src={pdf} width={30} alt="pdf file"/>
            <a
              href="#"
              className="text-[#3D5CFF] underline text-lg font-medium mt-2 inline-block"
            >
              {section.pdfLink}
            </a>
            </div>
          )}
        </section>
      ))}
    </div>
    </StudentDashboardLayout>
  );
};

export default Courses;