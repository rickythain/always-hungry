import React from "react";
import "../Styles/Home.css";
import CarouselContainer from "../Component/Carousel";
import SearchBar from "../Component/SearchBar";
import Category from "../Component/Category";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div>
        <CarouselContainer />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
}

export default Home;
