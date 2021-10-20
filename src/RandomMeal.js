import React from "react";
import MealCard from "./MealCard";

export default function RandomMeal() {
  const [meals, setMeals] = React.useState([]);
  React.useEffect(() => {
    setMeals([]);
    for (let i = 0; i < 10; i++) {
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((data) => {
          return data.json();
        })
        .then((dataJson) => {
          let temp = {
            name: dataJson.meals[0].strMeal,
            image: dataJson.meals[0].strMealThumb,
          };
          // setMeals((current) => [...current, temp]);
          setMeals((current) => [...current, dataJson.meals[0]]);
        });
    }
  }, []);
  return (
    <div className="container">
      {meals.map((data, index) => {
        return <MealCard key={index} meal={data} />;
      })}
    </div>
  );
}
