import "./App.css";
import { Link } from "react-router-dom";
import React from "react";

function MealCard({ meal }) {
  return (
    <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
      {meal && (
        <div className="card">
          <img src={meal.strMealThumb} />
          {meal.strMeal}
        </div>
      )}
    </Link>
  );
}

export default MealCard;
