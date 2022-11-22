import { Card, Button, Col, Row, Container, Collapse } from "react-bootstrap";
import fantasyBooks from "../books/fantasy.json";
import historyBooks from "../books/history.json";
import { Component } from "react";

// const LatestRelease = () => {

class LatestRelease extends Component {
  state = {
    input: "",
    toggle: true,
  };

  toggleBooks = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };

  render() {
    return (
      <>
        <Button className="ml-3 mb-3 btn-warning" onClick={this.toggleBooks}>
          {this.state.toggle === true ? "Hide" : "Show"}
        </Button>
        <Collapse in={this.state.toggle}>
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
              {fantasyBooks.map(({ title, img, category, price, asin }) => (
                <Col xl={2} lg={3} md={4} sm={6} xs={12}>
                  <Card key={asin}>
                    <Card.Img variant="top" src={img} className="img-fluid img-styling" alt={title} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{category}</Card.Text>
                      <Card.Text>${price}</Card.Text>
                      <Button variant="warning">Buy book</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <h2>History</h2>
            <Row id="history">
              {historyBooks.map(({ title, img, category, price, asin }) => (
                <Col xl={2} lg={3} md={4} sm={6} xs={12}>
                  <Card key={asin}>
                    <Card.Img variant="top" src={img} className="img-fluid img-styling" alt={title} />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>{category}</Card.Text>
                      <Card.Text>${price}</Card.Text>
                      <Button variant="warning">Buy book</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Collapse>
      </>
    );
  }
}

export default LatestRelease;
