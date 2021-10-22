import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function Ingredients({ mealIngredients }) {
  return (
    <div className="meal-ingredient">
      {/* drop down list for ingredients */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>List of Ingredients</Accordion.Header>
          <Accordion.Body>
            <ul>
              {mealIngredients.map((ingredient, index) => {
                return (
                  <li key={index}>
                    {ingredient.ingredient} : {ingredient.quantity}
                  </li>
                );
              })}
            </ul>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>{" "}
    </div>
  );
}
export default Ingredients;
