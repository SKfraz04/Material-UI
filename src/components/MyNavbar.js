import React from "react";
import {
  Col,
  Container,
  Navbar,
  NavbarBrand,
  NavDropdown,
  Button,
  Row,
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function MyNavbar() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar
              className="topnavbar my-2 "
              fixed="top"
              variant="dark"
              bg="dark"
              expand="lg"
            >
              <Container>
                <NavbarBrand href="#">
                  <img
                    src="image/engineering.png"
                    height="30"
                    width="35"
                    alt="logo"
                    className="aline-top"
                  />
                  &nbsp; Material Kit React
                </NavbarBrand>
                <NavbarToggle aria-controls="my-nav" />
                <NavbarCollapse className="allnav text-light" id="my-nav">
                  <NavDropdown
                    className="fw-bold pe-3"
                    title="Page"
                    id="my-nav"
                  >
                    <div className="page-dropdown">
                      <ul>
                        Landing Page
                        <li>
                          <NavDropdown.Item href="#">
                            Coworking
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#">Rental</NavDropdown.Item>
                        </li>
                      </ul>
                      <ul>
                        Company
                        <li>
                          <NavDropdown.Item href="#">About Us</NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#">Pricing</NavDropdown.Item>
                        </li>
                      </ul>
                    </div>
                    {/* <Dropdown.Divider /> */}
                    <div className="page-dropdown">
                      <ul>
                        Support
                        <li>
                          <NavDropdown.Item href="#">
                            Help Center
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#">
                            Contact Us
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#">Faq</NavDropdown.Item>
                        </li>
                      </ul>
                      <ul>
                        App
                        <li>
                          <NavDropdown.Item href="#">App</NavDropdown.Item>
                        </li>
                      </ul>
                    </div>
                    {/* <Dropdown.Divider /> */}
                    <div className="page-dropdown">
                      <ul>
                        Blog
                        <li>
                          <NavDropdown.Item href="#">
                            Single Article
                          </NavDropdown.Item>
                        </li>
                        <li>
                          <NavDropdown.Item href="#">Auther</NavDropdown.Item>
                        </li>
                      </ul>
                      <ul>
                        Extra
                        <li>
                          <NavDropdown.Item href="#">
                            Virtual Reality
                          </NavDropdown.Item>
                        </li>
                      </ul>
                    </div>
                  </NavDropdown>
                  <NavDropdown
                    className="fw-bold pe-3"
                    title="Account"
                    id="my-nav"
                  >
                    <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#">logout</NavDropdown.Item>
                    <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="fw-bold pe-3"
                    title="Section"
                    id="my-nav"
                  >
                    <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#">logout</NavDropdown.Item>
                    <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="fw-bold pe-3"
                    title="Document"
                    id="my-nav"
                  >
                    <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#">logout</NavDropdown.Item>
                    <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    className="fw-bold pe-3"
                    title="Contact"
                    id="my-nav"
                  >
                    <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#">logout</NavDropdown.Item>
                    <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                  </NavDropdown>

                  <Navbar.Text className="commonbtn" href="#">
                    <Button href="#">Buynow</Button>
                  </Navbar.Text>
                </NavbarCollapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyNavbar;
