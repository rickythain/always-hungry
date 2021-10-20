import React from "react";
import MealCard from "./MealCard";

export default function Categories({ passResult }) {
  const [list, setList] = React.useState([]);
  const [category, selectCategory] = React.useState(["", "", "", ""]);
  const [meals, setMeals] = React.useState([]);

  React.useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((data) => {
        return data.json();
      })
      .then((dataJson) => {
        setList(dataJson.categories);
      });
  }, []);

  React.useEffect(() => {
    let categoryName = category[1];
    let addressGetMealOnCategory =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    let fullAddress = addressGetMealOnCategory + categoryName;

    if (category[1]) {
      fetch(fullAddress)
        .then((data) => {
          return data.json();
        })
        .then((dataJson) => {
          setMeals(Array.from(dataJson.meals));
          // console.log("meals: " + JSON.stringify(dataJson.meals, null, 2));
        });
    }
  }, [category]);

  React.useEffect(() => {
    passResult(meals);
  }, [meals]);
  return (
    <div>
      <select
        id="cat"
        value={category[1]}
        onChange={(e) => {
          //category = [index, value, des, image url]
          let index = e.target.selectedIndex;
          selectCategory([
            index,
            e.target.value,
            list[index].strCategoryDescription,
            list[index].strCategoryThumb,
          ]);
        }}
      >
        {list.map((data, index) => {
          return (
            <option key={index} value={data.strCategory}>
              {data.strCategory}
            </option>
          );
        })}
      </select>
      <div className="card-random">
        <h4>{category[1]}</h4>
        <img className="photo" src={category[3]} alt="" />
      </div>
      <div>
        <p>{category[2]}</p>
      </div>
    </div>
  );
}
