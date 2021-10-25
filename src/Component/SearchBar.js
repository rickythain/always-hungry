import React, { useState } from "react";
import "../Styles/Search.css";
import Axios from "axios";

function SearchBar({ passResult }) {
  const [mealName, setmealName] = useState("");
  const [recipes, setrecipes] = useState([]);
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  var url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`;

  // getRecipes function GETS data from provided url and save the data to "recipes" array
  async function getRecipes() {
    var result = await Axios.get(url);
    if (result.data.meals === 0 || result.data.meals === null) {
      NoResult();
    } else {
      setrecipes(result.data.meals);
    }
  }

  async function NoResult() {
    var result = await Axios.get(url2);

    setrecipes(result.data.meals);
  }

  // Runs getRecipes function whenever user submits a search. PreventDefault to disable website refresh upon submit.
  const onSubmit = (e) => {
    setrecipes([]);
    e.preventDefault();
    getRecipes();
  };

  React.useEffect(() => {
    // passResult(recipes);

    if (recipes === 0 || recipes === null) {
      passResult([]);
    } else {
      passResult(recipes);
    }
  }, [recipes]);

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={onSubmit}>
        <p>Start searching or choose a category to reveal exciting recipes!</p>
        <div className="search-section">
          <input
            className="searches"
            type="text"
            placeholder="Search for food / ingredient here"
            value={mealName}
            size="50"
            onChange={(e) => setmealName(e.target.value)}
          />

          <button className="search-button" type="submit" value="Search">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
