
import courseData from "../../utils/courseMaterials/coursedata.json"; // Assuming your JSON is in the same directory
import "./coursedetails.css";
import pdf from "../../assets/images/pdf.png";
const Courses = () => {
  return (
    <div className="p-6 bg-white text-gray-800">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{courseData.courseTitle}</h1>

      {/* Map through sections */}
      {courseData.sections.map((section) => (
        <section key={section.id} className="mb-6">
          <h2 className="text-lg font-semibold text-black mb-2">{section.title}</h2>
          <p className="text-[#555]">{section.content}</p>

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
              className="text-blue-600 underline text-sm mt-2 inline-block"
            >
              {section.pdfLink}
            </a>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default Courses;
