import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OfferImage from "../../assets/images/OFFER.svg";
import { Carousel, Image } from "react-bootstrap";
import "./discount-page.css";
import { useEffect, useState } from "react";

function DiscountPage() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel indicators={false} controls={false} className="carousal">
      <Carousel.Item className="d-flex justify-content-center align-items-center text-white mt-4 item">
        <div
          className="position-relative rounded-2 carouselPart ]"
          style={{ Width: "100%" }}
        >
          {/* <Image className="image1" src={OfferImage} alt="Offer" /> */}

          <div
            className="position   ml-lg-86"
          // style={{ transform: "translateY(-50%)" }}
          >
            <p

              className="percentage"
            >
              25% OFF*
            </p>
            <p
              className="today"
            >
              Today's Special
            </p>

            <p
              className="para-discount"
            >
              Get a Discount for Every Course Order Only Valid for Today.!
            </p>
          </div>
        </div>



      </Carousel.Item>


      {/* Indicators */}
      <div
        className="d-flex justify-content-center align-items-center indicator"

      >
        {Array.from({ length: 5 }, (_, index) => (
          <div
            className="point"
            key={index}
            style={{
              width: index === 2 ? (isMobile ? "1.5rem" : "2.5rem") : isMobile ? "0.4rem" : "1.2rem",
              height: isMobile ? "0.4rem" : "1.2rem",
              borderRadius: index === 2 ? "5px" : "50%",
              backgroundColor: index === 2 ? (isMobile ? "#FAC840" : "#FAC840") : isMobile ? "rgb(8, 82, 211)" : "#1A6EFC",
              margin: "0 5px",

            }}
          ></div>
        ))}
      </div>
    </Carousel>
  );
}

export default DiscountPage;
