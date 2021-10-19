import "./App.css";
import React, { useState } from "react";
import Axios from "axios";

function App() {
  const [mealName, setmealName] = useState("");

  var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Type meal name"
          value={mealName}
          onChange={(e) => setmealName(e.target.value)}
        ></input>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
