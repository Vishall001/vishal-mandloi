import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/farfetch.png";
import bitsOfCode from "../../Assets/Projects/timecamp.png";
import booking from "../../Assets/Projects/booking.png";
function Projects() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Time Camp"
              description="TimeCamp is a simple, yet feature-rich time tracking app to help you gain insights into your projects and tasks."
              work=" Made the integratuion pages"
              ghLink="https://github.com/Vishall001/Time-camp"
              demoLink="https://time-campclone.netlify.app/"
              tech="React, Redux, ChakraUI, Mondgodb, Express"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Farfetch"
              description="Farfetch is a British-Portuguese online luxury fashion retail platform that sells products from over 700 boutiques and brands from around the world. The company was founded in 2007 by the Portuguese entrepreneur"
              work=" Made the Cart and a payment page"
              ghLink="https://github.com/Vishall001/Farfetch-Clone"
              demoLink="https://peaceful-stroopwafel-aba1de.netlify.app/"
              tech="HTML, CSS, Javascript"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booking}
              isBlog={false}
              title="Booking.com"
              description="Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings. The website has over 28 million listings. The site is available in 43 languages."
              work=" Made the Homepage"
              ghLink="https://github.com/Vishall001/booking"
              demoLink="https://bookingcom-clone.netlify.app/"
              tech="React, Redux, ChakraUI, Axios"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
