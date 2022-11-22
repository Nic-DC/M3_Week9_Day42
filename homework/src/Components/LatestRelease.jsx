import { Card, Button, Col, Row, Container } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";

const LatestRelease = () => (
  <Container fluid>
    <h2 id="fantasy">Fantasy</h2>
    <Row>
      <Col xl={2} lg={3} md={4} sm={6} xs={12}>
        {fantasyBooks.map(({ title, img, category, price }) => (
          <Card>
            <Card.Img variant="top" src={img} className="img-fluid img-styling" alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{category}</Card.Text>
              <Card.Text>${price}</Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
    <h2>History</h2>
    <Row id="history">
      <Col xl={2} lg={3} md={4} sm={6} xs={12}>
        {historyBooks.map(({ title, img, category, price }) => (
          <Card>
            <Card.Img variant="top" src={img} className="img-fluid img-styling" alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{category}</Card.Text>
              <Card.Text>${price}</Card.Text>
              <Button variant="warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
);

export default LatestRelease;
