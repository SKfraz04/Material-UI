import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";

function Mycounter() {
  return (
    <Container fluid>
      <Row>
      <div className="counteri d-flex text-center mx-auto">
        <Col className="col-2 countercol">
        <div  className="livecounter">
          <CountUp start={0} end={300} duration={3} suffix="+" />
        </div>
        <h1>Coded Elements</h1>
        <p>
          From buttons, to inputs, navbars, alerts or cards, you are covered
        </p>
        </Col>
        <Col className="col-2 countercol">
        <div  className="livecounter">
          <CountUp start={0} end={100} duration={3} suffix="+" />
        </div>
        <h1>Design Blocks</h1>
        <p>
        Mix the sections, change the colors and unleash your creativity
        </p>
        </Col>
        <Col className="col-2 countercol">
        <div  className="livecounter">
          <CountUp start={0} end={40} duration={3} />
        </div>
        <h1>Pages</h1>
        <p>
        Save 3-4 weeks of work when you use our pre-made pages for your website
        </p>
        </Col>
      </div>
      </Row>
    </Container>
  );
}
export default Mycounter;
