import React from "react";
import "../Styles/Menu.css";
import MenuItem from "../Component/MenuItem";

function Menu({ result }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Meals for you</h1>
      <div className="menuList">
        {result.map((meal, key) => {
          return (
            <MenuItem
              key={key}
              meal={meal}
              image={meal.strMealThumb}
              name={meal.strMeal}
              category={meal.strCategory}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
