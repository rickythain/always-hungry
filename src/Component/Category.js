import React from "react";
import Carousel from "react-elastic-carousel";
import Apam from "../Assets/apambalik.jpg";
import "../Styles/category.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Category() {
  return (
    <>
      <div className="text">
        <h1 style={{ textAlign: "left" }}>Popular Categories</h1>
      </div>
      <div className="container">
        <Carousel breakPoints={breakPoints}>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Chicken</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Chicken</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
          <div>
            <button className="card">
              <img src={Apam} />
            </button>
            <p className="cat">Beef</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Category;
