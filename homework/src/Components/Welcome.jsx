import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => (
  <Jumbotron>
    <h1>
      Welcome to <strong>Books'n'Cooks</strong>
    </h1>
    <p>Subtitle to book store</p>
    <p>
      <Button variant="dark">Browse</Button>
    </p>
  </Jumbotron>
);

export default Welcome;
