import React from "react";
import { Carousel } from "react-bootstrap";
import "../Styles/Carousel.css";
import { Link } from "react-router-dom";

function CarouselContainer() {
  const [meals, setMeals] = React.useState([]);

  // get three random meals
  React.useEffect(() => {
    setMeals([]);
    for (let i = 0; i < 3; i++) {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((data) => {
          return data.json();
        })
        .then((dataJson) => {
          // console.log("meals: " + JSON.stringify(dataJson.meals, null, 2));
          setMeals((current) => [...current, dataJson.meals[0]]);
        });
    }
  }, []);

  return (
    <div>
      <Carousel fade={true} pause={false} variant="dark">
        {meals.map((meal, index) => {
          return (
            <Carousel.Item key={index} interval={2000}>
              <div className="w-100 d-flex flex-lg-row flex-column">
                <div className="col-12 col-lg-5 bg-red">
                  <img
                    className="d-flex w-100"
                    src={meal.strMealThumb}
                    alt="First slide"
                  />
                </div>
                <div className="caption col-12 col-lg-6 d-flex justify-content-center justify-content-lg-center align-items-center pr-4">
                  <div className="d-flex justify-content-center justify-content-lg-center flex-column mt-4 mt-lg-0 button-location">
                    <h1>{meal.strMeal}</h1>
                    <p>
                      {meal.strCategory} | {meal.strArea} | {meal.strTags}
                    </p>
                    {/* <Button variant="outline-dark">Get Recipe</Button> */}
                    <Link
                      to={{ pathname: "/recipe", state: { meal: { meal } } }}
                    >
                      <div className="button1">Get Recipe</div>
                    </Link>
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

export default CarouselContainer;
