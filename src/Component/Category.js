import React from "react";
import Carousel from "react-elastic-carousel";
import "../Styles/category.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Category({ passResult }) {
  const [list, setList] = React.useState([]);
  const [category, selectCategory] = React.useState("");
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
    let categoryName = category;
    let addressGetMealOnCategory =
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
    let fullAddress = addressGetMealOnCategory + categoryName;

    if (category) {
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
    if (meals === 0 || meals === null) {
      // passResult(null);
    } else {
      passResult(meals);
    }
  }, [meals]);

  const clickCategory = (category) => {
    selectCategory(category);
  };

  return (
    <>
      <div className="text">
        <h1 style={{ textAlign: "left" }}>Popular Categories</h1>
      </div>
      <div className="container">
        <Carousel breakPoints={breakPoints}>
          {list.map((data, index) => {
            return (
              <div key={index}>
                <button
                  className="card"
                  value={data.strCategory}
                  onClick={(e) => {
                    let category = e.target.alt;
                    clickCategory(category);
                  }}
                >
                  <img alt={data.strCategory} src={data.strCategoryThumb} />
                </button>
                <p className="cat">{data.strCategory}</p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Category;
