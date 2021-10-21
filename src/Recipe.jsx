import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import React from "react";
import MealCard from "./MealCard";

function Recipe() {
  // obtain meal data sent
  const location = useLocation();

  // states
  const [meal, setMeal] = React.useState({});
  const [mealTags, setMealTags] = React.useState("");
  const [mealIngredientList, setMealIngredientList] = React.useState([]);
  const [mealYouTubeLink, setMealYouTubeLink] = React.useState("");
  const [similarMeals, setSimilarMeals] = React.useState([]);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
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
    const mealObject = location.state?.meal;
    const mealData = mealObject.meal;

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

    if (meal.strCategory) {
      let categoryName = meal.strCategory;
      let addressGetMealOnCategory =
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
      let fullAddress = addressGetMealOnCategory + categoryName;

      console.log(
        `categoryname: ${categoryName}, apifulladdress: ${fullAddress}`
      );

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
          // console.log("meals: " + JSON.stringify(dataJson.meals, null, 2));
        });
    }
  }, [meal]);

  return (
    <div>
      <h1>Recipe</h1>
      <div>
        <Link to="/">to home</Link>
        <div>
          <p>meal: {meal.strMeal}</p>
          <img width="200" height="200" src={meal.strMealThumb} />
          <p>Category: {meal.strCategory}</p>
          <p>Area: {meal.strArea}</p>
          <p>Tags: {mealTags}</p>
          <iframe width="420" height="345" src={mealYouTubeLink}></iframe>
          <div>
            <p>Ingredients: </p>
            {mealIngredientList.map((ingredient, index) => {
              return (
                <p key={index}>
                  {ingredient.ingredient} : {ingredient.quantity}
                </p>
              );
            })}
          </div>
          <p>Instructions</p>
          <p className="trial">{meal.strInstructions}</p>
        </div>

        <div>
          <h2>Share this recipe!</h2>
          <a
            href="http://twitter.com/share?text=[TITLE]&url=[URL]"
            target="_blank"
            rel="nofollow"
          >
            [Social Media Share Text/Image]
          </a>
        </div>

        <div>
          {similarMeals.map((meal, index) => {
            return <MealCard meal={meal} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Recipe;
