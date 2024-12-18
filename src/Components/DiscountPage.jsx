import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import OfferImage from "../assets/images/OFFER.svg";

import { Carousel, Image } from "react-bootstrap";

import "../components/discount-page.css"

function DiscountPage() {
  return (
    <Carousel indicators={false} controls={false}>
      {/* Remove default arrows */}
      {/* Carousel Item */}
      <Carousel.Item className="d-flex justify-content-center align-items-center text-white mt-5">
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

        {/* Indicators */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Oval Indicators */}
          {Array.from({ length: 5 }, (_, index) => (
            <div
              key={index}
              style={{
                width: index === 2 ? "40px" : "20px", // Third one is rectangular
                height: "20px",
                borderRadius: index === 2 ? "5px" : "50%", // Oval or rectangle
                backgroundColor: index === 2 ? "#FAC840" : "#1A6EFC", // Updated active color
                margin: "0 5px",
              }}
            ></div>
          ))}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default DiscountPage;
