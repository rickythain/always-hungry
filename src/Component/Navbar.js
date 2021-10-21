import React, { useState } from "react";
import Logo from "../Assets/food-logo2.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="title" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <h3>alwaysHungry</h3>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/recipe"> Recipe </Link>
          <Link to="/about"> About </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/recipe"> Recipe </Link>
        <Link to="/about"> About </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
