import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,

} from "react-icons/di";
import {
  SiRedux,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiAliexpress,
  SiMongodb,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} id="about">
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>Java Script</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Nodejs</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5/>
        <h5>HTML</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h5>Github</h5>

      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
        <h5>CSS</h5>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <h5>Redux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <h5>Mongodb</h5>
        
      </Col>
    
       
    </Row>
  );
}

export default Techstack;
