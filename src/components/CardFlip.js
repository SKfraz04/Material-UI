import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import {MdTouchApp} from "react-icons/md";
import { MdContentCopy, MdCopyAll, MdOutlineAttachMoney } from "react-icons/md";
import {BiDevices} from "react-icons/bi"

function CardFlip() {
  return (
    <Container className="d-flex m-auto">
      <div className="flip-card col-3">
        <div className="flip-card-inner">
          <div className="flipcard-front">
            <img src="image/cardfront.jpeg" alt="front" className="img-fluid flipimg"></img>
          </div>
            <div className="flipcontant">
            <h2><MdTouchApp /></h2>
            <h3>Feel the material kit</h3>
            <p>All the MUI components that you need in a development have been re-design with the new look.</p>
            </div>
          <div className="flipcard-back">
          <img src="image/cardback.jpeg" alt="back" className="img-fluid flipimg"></img>
          <div className="flipcontant">
            <h2>Discover More</h2>
            <p>You will save a lot of time going from prototyping to full-functional code because all elements are implemented.</p>
            <Button className="commonbtn" href="#">START WITH HEADER</Button>
            </div>
          </div>
        </div>
      </div>
      <Row className="card-data col-6 m-auto">
        <Col className="col-6">
          <h2>
            <MdContentCopy />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
        <Col className="col-6">
          <h2>
            <MdCopyAll />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
        <Col className="col-6">
          <h2>
            <MdOutlineAttachMoney />
          </h2>
          <h3>Full Documentation</h3>
          <p>
            Built by developers for developers. Check the foundation and you
            will find everything inside our documentation.
          </p>
        </Col>
        <Col className="col-6">
          <h2>
            <BiDevices />
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
export default CardFlip;
