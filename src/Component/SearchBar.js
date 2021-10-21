import React, { Component, useState } from "react";
import "../Styles/Search.css";
import Search from "@material-ui/icons/Search";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";

function SearchBar({ passResult }) {
  const [mealName, setmealName] = useState("");
  const [recipes, setrecipes] = useState([]);
  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  var url2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${mealName}`;

  // getRecipes function GETS data from provided url and save the data to "recipes" array
  async function getRecipes() {
    var result = await Axios.get(url);
    if (result.data.meals == 0 || result.data.meals == null) {
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
    e.preventDefault();
    getRecipes();
  };

  React.useEffect(() => {
    console.log("input: " + mealName + " retrived: " + recipes);
    passResult(recipes);
  }, [recipes]);

  return (
    <div className="search-bar">
      <form className="search-form" onSubmit={onSubmit}>
        <div className="search-section">
          <input
            className="searches"
            type="text"
            placeholder="Search for food / ingredient here"
            value={mealName}
            onChange={(e) => setmealName(e.target.value)}
          />

          <button className="search-button" type="submit" value="Search">
            <Search />
          </button>
        </div>

        {/* Search Input and passes value of the input to getRecipes function
    //   <form className="searchForm" onSubmit={onSubmit}>
    //     <input
    //       type="text"
    //       placeholder="Type meal/ingredient name"
    //       value={mealName}
    //       onChange={(e) => setmealName(e.target.value)}
    //     ></input>
    //     <input type="submit" value="Search" />
    //   </form> */}

        {/* <p className="search-divider">------------------or------------------</p>
        <div className="category">
          <Dropdown className="Dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Categories
            </Dropdown.Toggle>

            <Dropdown.Menu className="Dropdown-menu">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </form>
    </div>
  );
}

export default SearchBar;
