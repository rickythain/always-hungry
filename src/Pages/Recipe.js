import React, { useContext } from "react";
import "../Styles/Recipe.css";
import "../Styles/Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Ingredients from "../Component/Ingredients";
import HowTo from "../Component/HowTo";
import RecipeContent from "../Component/RecipeContent";
import Video from "../Component/Video";
import { Cart } from "../Context";
import { useLocation } from "react-router-dom";

import MenuItem from "../Component/MenuItem.js";
import heart from "../Assets/heart02.png";
import favedHeart from "../Assets/full_heart.png";

function Recipe() {
  const { cart, setCart } = useContext(Cart);
  // obtain meal data sent
  const location = useLocation();
  const mealObject = location.state?.meal;
  const mealData = mealObject.meal;

  // states
  const [meal, setMeal] = React.useState({});
  const [mealTags, setMealTags] = React.useState("");
  const [mealIngredientList, setMealIngredientList] = React.useState([]);
  const [mealYouTubeLink, setMealYouTubeLink] = React.useState("");
  const [similarMeals, setSimilarMeals] = React.useState([]);

  // shuffle and array
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  // update recipe when meal changes
  React.useEffect(() => {
    // const location = useLocation();

    // retrieve full details of the meal
    let apiAddress = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
    let mealQuery = mealData.strMeal;
    mealQuery = mealQuery.split(" ").join("%20");
    let apiFullAddress = apiAddress + mealQuery;

    fetch(apiFullAddress)
      .then((data) => {
        return data.json();
      })
      .then((dataJson) => {
        // console.log(
        //   "incoming data " + JSON.stringify(dataJson.meals[0], null, 2)
        // );
        setMeal(dataJson.meals[0]);
      });
  }, [location.state?.meal]);

  // update variables when meal data is updated
  React.useEffect(() => {
    // set meal tags into a variable
    if (meal.strTags) {
      setMealTags(meal.strTags.split(",").join(", "));
    } else {
      setMealTags("");
    }

    // combine each ingredient with its corresponding measure
    setMealIngredientList([]);
    for (let i = 1; i < 21; i++) {
      let ingredientIndex = "strIngredient" + i;
      let quantityIndex = "strMeasure" + i;
      let ingredient = meal[ingredientIndex];
      let quantity = meal[quantityIndex];
      if (ingredient) {
        setMealIngredientList((current) => [
          ...current,
          { ingredient, quantity },
        ]);
      }
    }

    // change youtube link from watch to embed
    if (meal.strYoutube) {
      setMealYouTubeLink(meal.strYoutube.replace("watch?v=", "embed/"));
    } else {
      setMealYouTubeLink("");
    }

    // get similar meals based on category of current meal
    if (meal.strCategory) {
      let categoryName = meal.strCategory;
      let addressGetMealOnCategory =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
      let fullAddress = addressGetMealOnCategory + categoryName;

      fetch(fullAddress)
        .then((data) => {
          return data.json();
        })
        .then((dataJson) => {
          // setMeals(Array.from(dataJson.meals));
          let receivedMeals = Array.from(dataJson.meals);
          receivedMeals = receivedMeals.filter(
            (item) => item.strMeal !== meal.strMeal
          );
          receivedMeals = shuffle(receivedMeals);
          receivedMeals = receivedMeals.slice(0, 3);
          setSimilarMeals([]);
          setSimilarMeals(receivedMeals);
        });
    }
  }, [meal]);
  return (
    <div>
      <div className="Recipe-page">
        <div className="Recipe-Image-box">
          <img
            className="recipe-img"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          ></img>
          <div>
            {cart.some((x) => x.idMeal === meal.idMeal) ? (
              <button
                className="remove removeFav"
                onClick={() => {
                  setCart(cart.filter((c) => c.idMeal !== mealData.idMeal));
                  localStorage.removeItem(mealData.idMeal);
                }}
              >
                {/* Remove from Favourites */}

                <div className="fav-window">
                  <div className="fav-button-text">Remove from Favourites</div>
                </div>
                <img className="fav-image" src={favedHeart} alt="favorited" />
              </button>
            ) : (
              <button
                className="add addFav"
                onClick={() => {
                  setCart([...cart, mealData]);
                  localStorage.setItem(
                    mealData.idMeal,
                    JSON.stringify(mealData)
                  );
                }}
              >
                {/* Add to Favourites */}

                <div className="fav-window">
                  <div className="fav-button-text">Add to Favourites</div>
                </div>
                <img className="fav-image" src={heart} alt="add to favorites" />
              </button>
            )}
          </div>
        </div>
        <div className="Ingredients-box">
          <div>
            <RecipeContent
              mealName={meal.strMeal}
              mealCategory={meal.strCategory}
            />
          </div>

          <div>
            <Ingredients mealIngredients={mealIngredientList} />
          </div>

          <div>
            <HowTo mealInstructions={meal.strInstructions} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <Video mealLink={mealYouTubeLink} />
        </div>
      </div>
      <div>
        <div className="menu-text">
          <h2>
            <u>Similar recipe for you!</u>
          </h2>
          <div className="menu-item">
            {/* <div className="similar-meal">
            <h2>similar meals!</h2>
          </div> */}

            {similarMeals.map((meal, index) => {
              return (
                <MenuItem
                  key={index}
                  meal={meal}
                  image={meal.strMealThumb}
                  name={meal.strMeal}
                  category={meal.strCategory}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
