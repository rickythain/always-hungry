import React, { useState, useEffect, useContext } from "react";
import { Cart } from "./Context";
import MealCard from "./MealCard.jsx";
import "./styles.css";
import "./App.css";
import { Link } from "react-router-dom";
import MenuItem from "./Component/MenuItem";

const CartPage = () => {
  const [total, setTotal] = useState();

  const { cart, setCart } = useContext(Cart);

  //   useEffect(() => {
  //     setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  //   }, [cart]);

  return (
    <div class="fav-page">
      <span className="fav-count" style={{ fontSize: 30 }}>
        You have {cart.length} item in Favourites
      </span>
      <div className="productContainer">
        {/* {cart && cart.map((prod) => <MealCard prod={prod} key={prod.idMeal} />)} */}
        {cart &&
          cart.map((meal, key) => (
            <MenuItem
              key={key}
              meal={meal}
              image={meal.strMealThumb}
              name={meal.strMeal}
              category={meal.strCategory}
            />
          ))}
      </div>
    </div>
  );
};

export default CartPage;
