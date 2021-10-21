import React from "react";
import { Carousel } from "react-bootstrap";
import "../Styles/Carousel.css";
import Button from "react-bootstrap/Button";
import MealCard from "../MealCard";
import image1 from "../Assets/salmon.jpg";
import image2 from "../Assets/smokedchicken.jpg";
import image3 from "../Assets/pancake.jpg";

function CarouselContainer() {
  const [meals, setMeals] = React.useState([]);
  React.useEffect(() => {
    setMeals([]);
    for (let i = 0; i < 3; i++) {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((data) => {
          return data.json();
        })
        .then((dataJson) => {
          // let temp = {
          //   name: dataJson.meals[0].strMeal,
          //   image: dataJson.meals[0].strMealThumb,
          // };
          // setMeals((current) => [...current, temp]);
          // console.log("meals: " + JSON.stringify(dataJson.meals, null, 2));
          setMeals((current) => [...current, dataJson.meals[0]]);
        });
    }
  }, []);

  return (
    // <p>
    //   {" "}
    //   hello
    //   {meals.map((data, index) => {
    //     return <MealCard key={index} meal={data} />;
    //   })}
    // </p>
    <div>
      <Carousel infiniteLoop={true} fade={true} pause={false} variant="dark">
        {meals.map((data, index) => {
          return (
            <Carousel.Item key={index} interval={200000}>
              <div className="w-100 d-flex flex-lg-row flex-column">
                <div className="col-12 col-lg-6 bg-red">
                  <img
                    className="d-flex w-100"
                    src={data.strMealThumb}
                    alt="First slide"
                  />
                </div>
                <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
                  <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0 button-location">
                    <h1>{data.strMeal}</h1>
                    <p>
                      {data.strCategory} | {data.strArea} | {data.strTags}
                    </p>
                    {/* <Button variant="outline-dark">Get Recipe</Button> */}
                    <a href="something" class="button1">
                      Get Recipe
                    </a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

{
  /* <Carousel.Item interval={200000}>
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
                {/* <Button variant="outline-dark">Get Recipe</Button> */
}
//         <a href="something" class="button1">
//           Get Recipe
//         </a>
//       </div>
//     </div>
//   </div>
// </Carousel.Item>
// <Carousel.Item interval={2000}>
//   <div className="w-100 d-flex flex-lg-row flex-column">
//     <div className="col-12 col-lg-6 bg-red">
//       <img className="d-flex w-100" src={image2} alt="Second slide" />
//     </div>
//     <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
//       <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0">
//         <h1>Second slide label</h1>
//         <p>
//           Nulla vitae elit libero, a pharetra augue mollis interdum.
//         </p>
//         {/* <Button variant="outline-dark">Get Recipe</Button> */}
//         <a href="something" class="button1">
//           Get Recipe
//         </a>
//       </div>
//     </div>
//   </div>
// </Carousel.Item>
// <Carousel.Item interval={2000}>
//   <div className="w-100 d-flex flex-lg-row flex-column">
//     <div className="col-12 col-lg-6 bg-red">
//       <img className="d-flex w-100" src={image3} alt="Third slide" />
//     </div>
//     <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
//       <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0">
//         <h1>Third slide label</h1>
//         <p>
//           Nulla vitae elit libero, a pharetra augue mollis interdum.
//         </p>
//         {/* <Button variant="outline-dark">Get Recipe</Button> */}
//         <a href="something" class="button1">
//           Get Recipe
//         </a>
//       </div>
//     </div>
//   </div>
// </Carousel.Item> */}

export default CarouselContainer;
