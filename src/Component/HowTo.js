import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import "../Styles/Recipe.css";

function HowTo({ mealInstructions }) {
  return (
    <div className="meal-instruction">
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How to Cook</Accordion.Header>
          <Accordion.Body>
            <div className="instructions">{mealInstructions}</div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default HowTo;
