import { Card, Button, Col, Row, Container } from "react-bootstrap";

const LatestRelease = () => (
  <Container>
    <Row>
      <Col>
        <Card className="ml-3">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default LatestRelease;
