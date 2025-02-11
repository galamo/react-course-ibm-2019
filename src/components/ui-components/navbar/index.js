import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import { AppLinks } from "../../appRouter";
import { routes } from "../../appRouter/route.config";

export default class TrusteerNavbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div style={{ display: "flex", alignSelf: "center" }}>
              <AppLinks routes={routes} />
            </div>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Link</Nav.Link>
            <Nav.Link href="/countries">Link</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
