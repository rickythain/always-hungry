import React from "react";
import "./Recipe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Ingredients from "./components/Ingredients";
import HowTo from "./components/HowTo";
import RecipeContent from "./components/RecipeContent";
import Video from "./components/Video";
import Suggested from "./components/Suggested";

function Recipe() {
  console.log("inside recipe ");
  return (
    <div>
      <div className="Recipe-page">
        <div className="Recipe-Image-box">
          <img
            className="recipe-img"
            src="https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200-1024x683.jpg"
          ></img>
        </div>
        <div className="Ingredients-box">
          <div>
            <RecipeContent />
          </div>

          <div>
            <Ingredients />
          </div>

          <div>
            <HowTo />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Video />
        </div>
      </div>
      <div>
        <div>
          <Suggested />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
