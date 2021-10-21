import "./Homepage.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "react-bootstrap/Dropdown";

function Homepage() {
  return (
    <div className="App">
      <nav className="header-n-nav-bar">
        <div className="title">Always Hungry</div>
        <div className="nav-bar">
          <button className="home">Home</button>
          <button className="recipe">Recipe</button>
        </div>
      </nav>
      <div className="random-meal-generator"></div>
      <div className="search">
        <input className="search-bar" placeholder="Food"></input>
        <p>------------------or------------------</p>
        <div className="category">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="results"></div>
    </div>
  );
}

export default Homepage;
