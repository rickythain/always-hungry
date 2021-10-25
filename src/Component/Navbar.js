import React, { useState, useContext } from "react";
import Logo from "../Assets/food-logo2.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../Styles/Navbar.css";
import { Cart } from "../Context";
import heart from "../Assets/heart02.png";
import favedHeart from "../Assets/full_heart.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const { cart } = useContext(Cart);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="title" id={openLinks ? "open" : "close"}>
        <Link to="/">
          <img src={Logo} alt="always hungry" />
        </Link>
        <h3>alwaysHungry</h3>

        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/cart" className="nav-fav">
            Favourites
            {cart.length > 0 ? (
              <div className="fav">
                <img src={favedHeart} alt="favorite added" />
                <div className="fav-count fav-text-white">{cart.length}</div>
              </div>
            ) : (
              <div className="fav">
                <img src={heart} alt="favorite none" />
                <div className="fav-count fav-text-black">0</div>
              </div>
            )}
          </Link>
          {/* <Link to="/recipe"> Recipe </Link>
          <Link to="/about"> About </Link> */}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/cart" className="nav-fav">
          Favourites
          {cart.length > 0 ? (
            <div className="fav">
              <img src={favedHeart} alt="favorite added" />
              <div className="fav-count fav-text-white">{cart.length}</div>
            </div>
          ) : (
            <div className="fav">
              <img src={heart} alt="favorite none" />
              <div className="fav-count fav-text-black">0</div>
            </div>
          )}
        </Link>
        {/* <Link to="/recipe"> Recipe </Link> */}
        {/* <Link to="/about"> About </Link> */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
