import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiTwotoneContacts,
  AiTwotonePhone,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // function scrollHandler() {
  //   if (window.scrollY >= 20) {
  //     updateNavbar(true);
  //   } else {
  //     updateNavbar(false);
  //   }
  // }

  // window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <strong className="main-name"> VM.</strong>
          {/* <img src={logo} className="img-fluid logo" alt="brand" />  */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav>
              <Link style={{ color: "white", marginTop: "1em" ,cursor:"pointer"}} to="home">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
              </Nav>
            </Nav.Item>

            <Nav.Item>
              <Nav>
                <Link style={{ color: "white", marginTop: "1em" ,cursor:"pointer" }} to="about">
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Link>
              </Nav>
            </Nav.Item>

            <Nav.Item>
              <Nav>
              <Link style={{ color: "white", marginTop: "1em" ,cursor:"pointer" }} to="project">
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Link>
              </Nav>
            </Nav.Item>
          
          
            <Nav.Item>
              <Nav>
              <Link style={{ color: "white", marginTop: "1em" ,cursor:"pointer" }} to="contact">
                <AiTwotonePhone
                  style={{ marginBottom: "2px" }}
                />{" "}
                Contact
              </Link>
              </Nav>
            </Nav.Item>

            <Nav.Item style={{ marginTop: "1em" }}>
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop: "20px",
                }}
                href="https://drive.google.com/file/d/1hFgGYf6BXD3lcaoTw3h1kVWDHXMEO-Ic/view?usp=sharing"
                target={"_blank"}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} />
                Resume{" "}
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
