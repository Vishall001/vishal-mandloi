import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiBootstrap,
  SiNetlify,
  SiChakraui,
  SiTailwindcss,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VS Code</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>Postman</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h5>Vercel</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h5>Bootstrap</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiChakraui />
        <h5>Chakra UI</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5>Heroku</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <h5>Netlify</h5>

      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <h5>Tailwindcss</h5>

      </Col>
    </Row>
  );
}

export default Toolstack;
