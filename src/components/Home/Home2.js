import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/about.png";
import Tilt from "react-parallax-tilt";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Github from "../About/Github";
import { Contact } from "./contact";

function Home2() {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em",textAlign:"left" }}>
                ABOUT <span className="purple">ME</span>
              </h1>
              <p className="home-about-body">
                A result-oriented and self-motivated Software developer, Constant learner and ability to adapt to new technologies.
                <br />
                <br />
                looking for a challenging career where I can implement my coding
                knowledge to further enhance my skills.
                <i>
                  <b className="purple">
                    {" "}
                    Strong knowledge of HTML, CSS, Javascript, React and Redux{" "}
                  </b>
                </i>
                <br />
                <br />
                My field of interest is building  &nbsp;
                <i>
                  <b className="purple">
                    full fletch and user-friendly application.
                  </b>
                </i>

              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid " alt="avatar" />
              </Tilt>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      {/* <Github /> */}
      <Contact />

    </>
  );
}
export default Home2;
