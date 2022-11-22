import { Nav } from "react-bootstrap";

const MyFooter = () => (
  <div className="mt-5">
    <Nav justify variant="tabs" defaultActiveKey="/home" className="footer-sticky">
      <Nav.Item>
        <Nav.Link href="/home">
          Footer
          <Nav.Item>
            <Nav.Link>@{new Date().getFullYear()}</Nav.Link>
          </Nav.Item>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default MyFooter;
