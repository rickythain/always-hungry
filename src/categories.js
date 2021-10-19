import React from "react";

export default function Categories() {
  const [list, setList] = React.useState([]);
  const [category, selectCategory] = React.useState(["", "", "", ""]);

  React.useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((data) => {
        return data.json();
      })
      .then((dataJson) => {
        setList(dataJson.categories);
      });
  }, []);
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
      <div className="card">
        <h4>{category[1]}</h4>
        <img className="photo" src={category[3]} alt="" />
      </div>
      <p>{category[2]}</p>
    </div>
  );
}
