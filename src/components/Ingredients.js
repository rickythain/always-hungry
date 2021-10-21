import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function Ingredients() {
  return (
    <div className="meal-ingredient">
      {/* drop down list for ingredients */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>List of Ingredients</Accordion.Header>
          <Accordion.Body>
            <ul>
              YOU WILL NEED
              <li>
                1 ½ cups (195 grams) all-purpose flour, see tips below for how
                to measure flour{" "}
              </li>
              <li>
                2 tablespoons sugar 1 tablespoon aluminum-free bakingpowder, see
                notes for substituting baking soda{" "}
              </li>
              <li>1/2 teaspoon of fine sea or table salt or </li>
              <li>3/4 teaspoon kosher salt </li>
              <li>1 ¼ cups (295 ml) milk, dairy or non-dairy </li>
              <li>1 large egg </li>
              <li>
                4 tablespoons unsalted butter, melted, plus more for skillet{" "}
              </li>
              <li>1 teaspoon vanilla extract</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>{" "}
    </div>
  );
}
export default Ingredients;
