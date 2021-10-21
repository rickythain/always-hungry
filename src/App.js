import "./App.css";
import Axios from "axios";
// import Recipe from "./Recipe.jsx";
import Recipe from "./Pages/Recipe.js";
import MealCard from "./MealCard";
import Categories from "./categories";
import RandomMeal from "./RandomMeal";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { Component, useState } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import CartPage from "./CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Switch>
        <Route path="/recipe" exact component={Recipe} />
      </Switch>

      <Switch>
        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
    // </div>
  );
}

export default App;
