import "./App.css";
import { Link } from "react-router-dom";
import React from "react";
import MealCard from "./MealCard";

function Results({ meals }) {
  return (
    meals &&
    meals.map((meal, index) => {
      return <MealCard key={index} meal={meal} />;
    })
  );
}

export default Results;
