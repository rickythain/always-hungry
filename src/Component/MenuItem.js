import React from "react";
import Menu from "../Pages/Menu";

function MenuItem({ image, name, category }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <div className="name-category">
        <h1> {name} </h1>
        <p> Category: {category} </p>
      </div>
    </div>
  );
}

export default MenuItem;
