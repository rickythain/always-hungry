import React from "react";

export default function RandomMeal() {
  const [meals, setMeals] = React.useState([]);
  React.useEffect(() => {
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
          setMeals((current) => [...current, temp]);
        });
    }
  }, []);
  return (
    <div className="container">
      {meals.map((data, index) => {
        return (
          <div className="card">
            <img className="photo" src={data.image} />
            <h4>{data.name}</h4>
          </div>
        );
      })}
    </div>
  );
}
