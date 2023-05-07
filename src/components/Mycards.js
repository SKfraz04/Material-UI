import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdContentCopy } from "react-icons/md";

function Mycards() {
  return (
    <Container> 
      <Row>
        <Col>
          <h2>
            <MdContentCopy />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
        <Col>
          <h2>
            <MdContentCopy />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
        <Col>
          <h2>
            <MdContentCopy />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
        <Col>
          <h2>
            <MdContentCopy />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Mycards;
