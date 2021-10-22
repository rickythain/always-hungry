import React, { createContext, useState } from "react";

function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  if (i > 0) {
    while (i--) {
      //   console.log(JSON.parse(localStorage.getItem(keys[i])));
      values.push(JSON.parse(localStorage.getItem(keys[i])));
      //   values.push(localStorage.getItem(keys[i]));
    }
    return values;
  } else {
    return [];
  }
}

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState(allStorage());
  return <Cart.Provider value={{ cart, setCart }}>{children}</Cart.Provider>;
};

export default Context;
