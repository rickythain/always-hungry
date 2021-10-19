import logo from "./logo.svg";
import "./App.css";
import Recipe from "./Recipe.jsx";
import MealCard from "./MealCard";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React, { Component } from "react";

function App() {
  const [meals, setMeals] = React.useState([]);

  // obtain data from api
  React.useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((data) => {
        return data.json();
      })
      .then((dataJson) => {
        setMeals(Array.from(dataJson.meals));
        console.log(meals);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Home</h1>
        <MealCard />
        {meals.map((meal, index) => {
          if (meal) {
            return <MealCard key={index} meal={meal} />;
          }
        })}
      </div>
    </div>
  );
}

export default App;
