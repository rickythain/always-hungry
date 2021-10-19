import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React from "react";
import Categories from "./categories";
import RandomMeal from "./RandomMeal";

function App() {
  return (
    <>
      <RandomMeal />
      <Categories />
    </>
  );
}

export default App;
