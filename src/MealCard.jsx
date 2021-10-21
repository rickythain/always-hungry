import "./App.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Cart } from "./Context";
import "./styles.css";

function MealCard({ meal }) {
  const { cart, setCart } = useContext(Cart);
  return (
    <div>
      <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
        {meal && (
          <div className="card">
            <img src={meal.strMealThumb} />
            {meal.strMeal}
          </div>
        )}
      </Link>
      {cart.includes(meal) ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.idMeal !== meal.idMeal));
          }}
        >
          Remove from Favourites
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, meal]);
          }}
        >
          Add to Favourites
        </button>
      )}
    </div>
  );
}

export default MealCard;
