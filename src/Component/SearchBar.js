import React from "react";
import "../Styles/Search.css";
import Search from "@material-ui/icons/Search";
import Dropdown from "react-bootstrap/Dropdown";

function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-form">
        <div className="search-section">
          <input
            className="searches"
            type="text"
            placeholder="Search for food here"
          />
          <a className="search-button" type="submit">
            <Search />
          </a>
        </div>
        {/* <p className="search-divider">------------------or------------------</p>
        <div className="category">
          <Dropdown className="Dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Categories
            </Dropdown.Toggle>

            <Dropdown.Menu className="Dropdown-menu">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div> */}
      </form>
    </div>
  );
}

export default SearchBar;
