import "../Styles/Home.css";
import CarouselContainer from "../Component/Carousel";
import SearchBar from "../Component/SearchBar";
import Category from "../Component/Category";
import Menu from "./Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component, useState } from "react";
import Axios from "axios";
import { Cart } from "../Context";
import { useContext } from "react";

function Home() {
  const [categoryResult, setCategoryResult] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [queryResult, setQueryResult] = useState([]);
  const { cart, setCart } = useContext(Cart);

  // updates query result section based on result of search on name
  React.useEffect(() => {
    setQueryResult(searchResult);
  }, [searchResult]);

  // updates query result section based on result of search on category
  React.useEffect(() => {
    setQueryResult(categoryResult);
  }, [categoryResult]);

  React.useEffect(() => {
    // if (JSON.stringify(queryResult) === "[]") console.log("inside");
  }, [queryResult]);

  React.useEffect(() => {}, []);

  return (
    <div className="home">
      <div>
        <CarouselContainer />
      </div>
      <div>
        <SearchBar passResult={setSearchResult} />
      </div>
      <div>
        <Category passResult={setCategoryResult} />
      </div>
      <div>
        {JSON.stringify(queryResult) === "[]" ? (
          <p className="meal-not-found">Sorry! No meal is found :(</p>
        ) : queryResult === null ? (
          <p>bye</p>
        ) : (
          <Menu result={queryResult} />
        )}
      </div>
    </div>
  );
}

export default Home;
