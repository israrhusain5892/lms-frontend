import './hero-section.css';
import student from '../../assets/images/College_student.png';

const HeroSection = () => {
  return (
    <section className="hero-section relative bg-[url('../../assets/images/banner.png')] bg-cover bg-center text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between m-20 h-[373px] rounded-lg">
      <div className="text-container max-w-lg  md:text-left ">
        <h1 className="text-5xl font-change mb-3">
          Get Lifetime <span className="text-[#FFEE00] text-5xl">Deal</span>
        </h1>
        <p className="text-3xl mb-[35px] w-100">Access to all on-demand courses</p>
        <button className="bg-[#0F172A] text-white  px-6 py-2 rounded-md hover:bg-[#000] shadow-xl">
          Redeem Now
        </button>
      </div>

      {/* Image Section */}
      <div className="image-container absolute right-16 bottom-0">
        <img
          src={student} 
          alt="Student with notebook"
          className="w-full max-w-sm rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
