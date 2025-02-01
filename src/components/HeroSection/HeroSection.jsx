import './hero-section.css';
import student from '../../assets/images/College_student.png';

const HeroSection = () => {
  return (
    <section className="hero-section mx-auto relative bg-[url('../../assets/images/banner.png')] bg-cover bg-center text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between m-20 h-[373px] rounded-lg">
      <div className="text-container max-w-lg  md:text-left ">
        <h1 className="text-5xl font-change mb-3 d-flex align-items-center gap-3">
          Get Lifetime <div className="text-[#FFEE00] text-5xl deal d-flex flex-col ">Deal 
          <svg width="114" height="6" viewBox="0 0 114 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.18875L2.45144 3.05831C39.2375 -0.247721 78.571 0.444779 113.909 5.02062" stroke="#FFEF00" stroke-width="1.2"/>
</svg>

            
             </div>

        </h1>
        <p className="text-3xl mb-[35px] w-100">Access to all on-demand courses</p>
        <button className="bg-[#0F172A] text-white redeem  px-6 py-2 rounded-md hover:bg-[#000] shadow-xl">
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
