import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Vishall001"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vishal-mandloii/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <br />
             
            </ul>
            <br/>
            OR
          <Container className="text-break"  fluid style={{margin:"auto", justifyContent:"center",textAlign:"center"}}>
          <h6 className="project-heading text-break fs-5"  >
                Gmail :{" "}
                <a style={{ fontSize: "25px" ,marginRight:"20px"}} className="purple fs-5" href={`mailto:${"email"}`}>
                  {"vishalmandloi62@gmail.com"}
                </a>
              </h6>
              <h6 className="project-heading text-break fs-5">
                Phone :{" "}
                <a className="purple fs-5" style={{ fontSize: "25px" }}  href={`tel:${"phone"}`}>
                  {8770367726}
                </a>
              </h6>
          </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};