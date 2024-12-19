import data from "../../utils/CourseBody/data.json";
import demoprofile from "../../assets/images/demo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const CourseBody = () => {
  return (
    <div className="w-full courseBody mx-auto p-4 space-y-12">
      {/* Tabs */}
      <nav className="flex space-x-8 border-b pb-2">
        <button className="text-blue-500 font-semibold border-b-2 border-blue-500">
          About
        </button>
        <button className="greyText hover:text-blue-500">Author</button>
        <button className="greyText hover:text-blue-500">Reviews</button>
      </nav>

      {/* About Section */}
      <section className="">
        <p className="greyText text-lg">{data.about}</p>
      </section>

      {/* Course Materials Section */}
      <section>
        <h2 className="text-xl font-bold text-[#3D3D3D] mb-4">
          Course Materials
        </h2>
        <ul className="space-y-4">
          {data.materials.map((material, index) => (
            <div
              key={index}
              className="flex items-center bg-red-00 p-3 space-x-3 border-b-2 border-[#cbd5e169] "
            >
              <span className="">{material.icon}</span>
              <span className="text-black text-base">{material.names}</span>
            </div>
          ))}
        </ul>
      </section>

      {/* Reviews Section */}
      <section>
        <h2 className="text-xl font-bold mb-4 text-[#3D3D3D]">Reviews</h2>
        <div className="space-y-6 ">
          {data.reviews.map((review, index) => (
            <div key={index} className="p-4 shadow-md">
              <div className="flex justify-start gap-2 items-center mb-2">
                <img
                  src={demoprofile}
                  className="leftImage w-10 h-10 rounded-full"
                  alt="profileimage"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{review.name}</h3>
                  <div className="flex justify-start gap-4 mt-1">
                    <div className="text-yellow-500 text-sm">
                      {"⭐".repeat(review.rating)}
                    </div>
                    <span className="text-sm greyText">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="greyText mt-2 lg:w-[500px]">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Author Section */}
      <section>
        <h2 className="text-xl font-bold mb-6 text-[#3D3D3D]">About Author</h2>

        {/* Author Info Section */}
        <div className="flex items-center space-x-6 mb-6 shadow-sm pb-8">
          {/* Author Profile Picture */}
          <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
            {data.author.name[0]}
          </div>

          {/* Author Name, Qualification, and Rating */}
          <div>
            <h3 className="text-2xl font-semibold text-[#0F172A]">
              {data.author.name}
            </h3>
            <p className="text-md greyText ">{data.author.qualification}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="text-orange-400 text-sm">{`⭐ ${data.author.rating}`}</div>
            </div>
          </div>
        </div>

        {/* Author Description Section */}
        <div className="wrapper pb-2 shadow-sm mb-4">
          <div className="mb-6  w-[650px] ">
            <p className="text-sm greyText">{data.author.description}</p>
          </div>
        </div>

        {/* Author Experience Section */}
        <div>
          <ul className="space-y-4">
            {data.author.experience.map((exp, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-6 shadow-sm"
              >
                <div className="flex justify-center items-center gap-2">
                  <i
                    className={`fa-solid fa-building-columns bg-${exp.color}-100 text-${exp.color}-500 items-center flex justify-center w-10 h-10 rounded-3xl`}
                  ></i>

                  <div className="flex flex-col">
                    <span className="font-medium text-[#0f172a]">
                      {exp.role}
                    </span>
                    <span className="font-medium greyText">
                      {exp.institution}
                    </span>
                  </div>
                </div>
                <span className="text-sm greyText">{exp.years}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default CourseBody;
