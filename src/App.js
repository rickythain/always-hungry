import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import CartPage from "./CartPage";
import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
