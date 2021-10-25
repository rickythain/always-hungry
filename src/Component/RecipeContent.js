function RecipeContent({ mealName, mealCategory }) {
  return (
    <div>
      <div className="Recipe-name" id="name">
        <h1>{mealName}</h1>
      </div>
      <div className="recipe-content">
        <div className="recipe-tags">
          <p className="recipe-tag" id="category">
            Category: {mealCategory}
          </p>
        </div>
      </div>
    </div>
  );
}
export default RecipeContent;
