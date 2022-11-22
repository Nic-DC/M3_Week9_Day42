import { Card, Button, Col, Row, Container } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";
import { Component } from "react";

// const LatestRelease = () => {

class LatestRelease extends Component {
  state = {
    input: "",
  };

  render() {
    return (
      <Container fluid>
        <div id="example-collapse-text" className=" mb-3">
          <input
            type="text"
            placeholder="search category"
            id="searchInput"
            onKeyUp={(event) => {
              console.log(event.target.value);

              this.setState({
                input: event.target.value,
              });

              console.log("setState is: ", this.state);
            }}
          />
        </div>

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
                  <Button variant="warning">Buy book</Button>
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
                  <Button variant="warning">Buy book</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LatestRelease;
