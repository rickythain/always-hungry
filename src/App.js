import "./App.css";

import React, { useState } from "react";
import Axios from "axios";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Categories from "./categories";
import RandomMeal from "./RandomMeal";


function App() {
  const [mealName, setmealName] = useState("");
  const [recipes, setrecipes] = useState([]);

  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  // getRecipes function GETS data from provided url and save the data to "recipes" array
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.meals);
  }

  // Runs getRecipes function whenever user submits a search. PreventDefault to disable website refresh upon submit.
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (

    <div className="App">
      {/* Temporary title for the page */}

      <RandomMeal />
      <Categories />
      <h1>Search for Meal</h1>

      {/* Search Input and passes value of the input to getRecipes function */}
      <form className="searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type meal name"
          value={mealName}
          onChange={(e) => setmealName(e.target.value)}
        ></input>
        <input type="submit" value="Search" />
      </form>

      {/* Returns searched recipe name and image */}
      <div>
        {recipes.map((recipe) => {
          return (
            <div className="recipeTile">
              <img className="image" src={recipe["strMealThumb"]} />
              <p className="mealName">{recipe["strMeal"]}</p>
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default App;
