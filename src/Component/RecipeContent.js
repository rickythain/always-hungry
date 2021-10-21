function RecipeContent({ mealName, mealCategory }) {
  return (
    <div>
      <div className="Recipe-name" id="name">
        <h1>{mealName}</h1>
      </div>
      <div className="recipe-content">
        <p className="recipe-tags">
          <p class="recipe-tag" id="category">
            Category: {mealCategory}
          </p>
        </p>
      </div>
    </div>
  );
}
export default RecipeContent;
