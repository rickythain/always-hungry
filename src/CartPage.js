import React, { useContext } from "react";
import { Cart } from "./Context";
import "./styles.css";
import "./App.css";
import MenuItem from "./Component/MenuItem";

const CartPage = () => {
  const { cart, setCart } = useContext(Cart);

  //   useEffect(() => {
  //     setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  //   }, [cart]);

  return (
    <div className="fav-page">
      <div className="fav-count-text" style={{ fontSize: 30 }}>
        You have {cart.length} item in Favourites
      </div>
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
