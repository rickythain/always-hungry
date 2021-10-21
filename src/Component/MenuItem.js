import React from "react";
import Menu from "../Pages/Menu";
import { Link } from "react-router-dom";

function MenuItem({ meal, image, name, category }) {
  return (
    <div className="menuItem">
      <Link to={{ pathname: "/recipe", state: { meal: { meal } } }}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <div className="name-category">
          <h1> {name} </h1>
          {category && <p> Category: {category} </p>}
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
