import "./App.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Cart } from "./Context";
import "./styles.css";

function MealCard({ meal }) {
  const { cart, setCart } = useContext(Cart);
  return (
    <div>
      {/* {console.log(meal)} */}
      <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
        {meal && (
          <div className="card">
            <img src={meal.strMealThumb} />
            {meal.strMeal}
          </div>
        )}
        {console.log(meal)}
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
            console.log(cart);
          }}
        >
          Add to Favourites
        </button>
      )}
    </div>
  );
}

export default MealCard;
