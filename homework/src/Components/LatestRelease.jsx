import { Card, Button, Col, Row, Container } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";

const LatestRelease = () => (
  <Container fluid>
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
  </Container>
);

export default LatestRelease;

{
  /* <Card className="ml-3">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>card's content.</Card.Text>
            <Button variant="warning">Go somewhere</Button>
          </Card.Body>
        </Card> */
}
