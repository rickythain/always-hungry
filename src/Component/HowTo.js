import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function HowTo() {
  return (
    <div className="meal-instruction">
      <Accordion>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How to Cook</Accordion.Header>
          <Accordion.Body>
            <ol type="1">
              <li>mix all ingredient</li>
              <li>cook in pan</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>mix all ingredient</li>
              <li>cook in pan</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>mix all ingredient</li>
              <li>cook in pan</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
              <li>serve</li>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
export default HowTo;
