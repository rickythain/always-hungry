import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import React from "react";

function Recipe() {
  // obtain meal data sent
  const location = useLocation();
  const mealObject = location.state?.meal;
  const mealData = mealObject.meal;

  const [meal, setMeal] = React.useState({});
  const [mealTags, setMealTags] = React.useState("");
  const [mealIngredientList, setMealIngredientList] = React.useState([]);
  const [mealYouTubeLink, setMealYouTubeLink] = React.useState("");

  // retrieve full details of the meal
  let apiAddress = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  let mealQuery = mealData.strMeal;
  mealQuery = mealQuery.split(" ").join("%20");
  let apiFullAddress = apiAddress + mealQuery;

  React.useEffect(() => {
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
  }, []);

  React.useEffect(() => {
    if (meal.strTags) {
      setMealTags(meal.strTags.split(",").join(", "));
    } else {
      setMealTags("");
    }

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

    if (meal.strYoutube) {
      setMealYouTubeLink(meal.strYoutube.replace("watch?v=", "embed/"));
    } else {
      setMealYouTubeLink("");
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
          <p class="trial">{meal.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
