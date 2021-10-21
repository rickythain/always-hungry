import React from "react";
import Menu from "../Pages/Menu";
import { Link } from "react-router-dom";
import { Cart } from "../Context";
import { useContext } from "react";
import "../styles.css";

function MenuItem({ meal, image, name, category }) {
  const { cart, setCart } = useContext(Cart);
  return (
    <div>
      <div className="menuItem">
        <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
          <div style={{ backgroundImage: `url(${image})` }}> </div>
          <div className="name-category">
            <h1> {name} </h1>
            {category && <p> Category: {category} </p>}
          </div>
        </Link>
      </div>
      {/* {console.log(cart.includes(meal))} */}
      {cart.some((x) => x.idMeal === meal.idMeal) ? (
        <button
          className="remove"
          onClick={() => {
            setCart(cart.filter((c) => c.idMeal !== meal.idMeal));
            localStorage.removeItem(meal.idMeal);
          }}
        >
          Remove from Favourites
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, meal]);
            localStorage.setItem(meal.idMeal, JSON.stringify(meal));
          }}
        >
          Add to Favourites
        </button>
      )}
    </div>
  );
}

export default MenuItem;
