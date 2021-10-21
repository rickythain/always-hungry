import React from "react";
import { MenuList } from "../helpers/MenuList.js";
import "../Styles/Menu.css";
import MenuItem from "../Component/MenuItem";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Meals for you</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              category={menuItem.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
