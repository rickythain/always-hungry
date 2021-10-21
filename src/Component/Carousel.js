import React from "react";
import { Carousel } from "react-bootstrap";
import "../Styles/Carousel.css";
import Button from "react-bootstrap/Button";

import image1 from "../Assets/salmon.jpg";
import image2 from "../Assets/smokedchicken.jpg";
import image3 from "../Assets/pancake.jpg";

function CarouselContainer() {
  return (
    <div>
      <Carousel infiniteLoop={true} fade={true} pause={false} variant="dark">
        <Carousel.Item interval={200000}>
          <div className="w-100 d-flex flex-lg-row flex-column">
            <div className="col-12 col-lg-6 bg-red">
              <img className="d-flex w-100" src={image1} alt="First slide" />
            </div>
            <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
              <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0 button-location">
                <h1>First slide label</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                {/* <Button variant="outline-dark">Get Recipe</Button> */}
                <a href="something" class="button1">
                  Get Recipe
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="w-100 d-flex flex-lg-row flex-column">
            <div className="col-12 col-lg-6 bg-red">
              <img className="d-flex w-100" src={image2} alt="Second slide" />
            </div>
            <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
              <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0">
                <h1>Second slide label</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                {/* <Button variant="outline-dark">Get Recipe</Button> */}
                <a href="something" class="button1">
                  Get Recipe
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="w-100 d-flex flex-lg-row flex-column">
            <div className="col-12 col-lg-6 bg-red">
              <img className="d-flex w-100" src={image3} alt="Third slide" />
            </div>
            <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
              <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0">
                <h1>Third slide label</h1>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                {/* <Button variant="outline-dark">Get Recipe</Button> */}
                <a href="something" class="button1">
                  Get Recipe
                </a>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselContainer;
