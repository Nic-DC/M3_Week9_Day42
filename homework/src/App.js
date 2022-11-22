import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // importing the bootstrap-css
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";
import LatestRelease from "./Components/LatestRelease";
import SearchBooks from "./Components/SearchBooks";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <Container fluid>
        <Row>
          <Col>
            <SearchBooks />
          </Col>
        </Row>
        <Row>
          <Col>
            <LatestRelease />
          </Col>
        </Row>
      </Container>

      <MyFooter />
    </div>
  );
}

export default App;
