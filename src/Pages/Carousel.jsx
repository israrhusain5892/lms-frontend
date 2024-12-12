import '../App.css';
import illustration from '../assets/illustration_2.png'; // Add your illustration image path

function Carousel() {
  return (
    <div className="carouselApp">
      <div className="carouselContainer">
        <a href='' className="carouselSkipButton">Skip</a>
        <div className="carouselContent">
          <img src={illustration} alt="Illustration" className="carouselIllustration" />
          <h1 className="carouselTitle">Receive announcements</h1>
          <p className="carouselDescription">
            Easy and fast announcements to <br/> always keep you updated
          </p>
        </div>
        <div className="carouselPagination">
          <span className="carouselDot"></span>
          <span className="carouselDot active"></span>
          <span className="carouselDot"></span>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
