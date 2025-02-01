import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OfferImage from "../assets/images/OFFER.svg";
import { Carousel, Image } from "react-bootstrap";
import "../components/discount-page.css"

function DiscountPage() {
  return (
    <Carousel indicators={false} controls={false}  className="carousal">
      <Carousel.Item className="d-flex justify-content-center align-items-center text-white mt-5 item">
        <div
          className="position-relative rounded-2 "
          style={{ maxWidth: "100%" }}
        >
          <Image src={OfferImage} alt="Offer" />

          <div
            className="position-absolute top-50 ml-20 ml-lg-86"
            style={{ transform: "translateY(-50%)" }}
          >
            <p
              style={{
                fontFamily: "Mulish",
                fontSize: "60px",
                fontWeight: "bold",
              }}
            >
              25% OFF*
            </p>
            <p
              style={{
                fontFamily: "Mulish",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Today's Special
            </p>

            <p
              style={{
                fontFamily: "Mulish",
                fontSize: "30px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Get a Discount for Every Course Order Only Valid for Today.!
            </p>
          </div>
        </div>

       
       
      </Carousel.Item>

      
       {/* Indicators */}
       <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            bottom: "70px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              style={{
                width: index === 2 ? "40px" : "20px",
                height: "20px",
                borderRadius: index === 2 ? "5px" : "50%",
                backgroundColor: index === 2 ? "#FAC840" : "#1A6EFC",
                margin: "0 5px",
              }}
            ></div>
          ))}
        </div>
    </Carousel>
  );
}

export default DiscountPage;
