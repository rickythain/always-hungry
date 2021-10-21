import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function Ingredients() {
  return (
    <div className="meal-ingredient">
      {/* drop down list for ingredients */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>List of Ingredients</Accordion.Header>
          <Accordion.Body>
            <ul>flour</ul>
            <ul>egg</ul>
            <ul>sugar</ul>
            <ul>milk</ul>
            <ul>oil</ul>
            <ul>baking powder</ul>
          </Accordion.Body>
        </Accordion.Item>{" "}
      </Accordion>{" "}
    </div>
  );
}
export default Ingredients;
