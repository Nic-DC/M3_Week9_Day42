import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // importing the components

const MyNav = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <strong>Books'n'Cooks</strong>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#history">History</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#horror">Horror</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#romance">Romance</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#scifi">SciFi</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MyNav;
