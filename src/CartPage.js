import React, { useState, useEffect, useContext } from "react";
import { Cart } from "./Context";
import MealCard from "./MealCard.jsx";
import "./styles.css";
import "./App.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [total, setTotal] = useState();

  const { cart } = useContext(Cart);

  //   useEffect(() => {
  //     setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  //   }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
      <div className="productContainer">
        {/* {cart && cart.map((prod) => <MealCard prod={prod} key={prod.idMeal} />)} */}
        {cart &&
          cart.map((meal) => (
            <div className="card">
              <img src={meal.strMealThumb} />
              {meal.strMeal}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartPage;
