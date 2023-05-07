import React from "react";
import { Container, Row } from "react-bootstrap";
import {FcApproval} from "react-icons/fc";

function MyBanner() {
  return (
    <>
      <Container fluid className="bgbanner p-0">
        <Row>
            <img src="image/bg.jpg" alt="background" />
            <div className="banner-contant col-4 text-center">
            <h1>Material Kit React <FcApproval className="banner-title-icon"/> </h1>
            <p>Start the Development with a ReactJS & MUI Design System inspired by Material Design.</p>
            </div>
        </Row>
      </Container>
    </>
  );
}

export default MyBanner;
