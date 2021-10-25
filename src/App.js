import "./App.css";
import Recipe from "./Pages/Recipe.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import CartPage from "./CartPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>

      <Switch>
        <Route path="/recipe" exact component={Recipe} />
      </Switch>

      <Switch>
        <Route exact path="/cart">
          <CartPage />
        </Route>
      </Switch>

      <Footer />
    </Router>
    // </div>
  );
}

export default App;
