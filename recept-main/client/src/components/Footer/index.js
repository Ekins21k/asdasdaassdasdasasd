import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, Col, Row } from "react-bootstrap";

import "./footer.css";

const Footer = () => {

  return (
    <>
      <Col className="footer-container">
        
        <p className="footerText">Made By</p>
        <Navbar className="justify-content-center footerText">
          <Nav>
            <Nav.Item>
              <Nav.Link target="_blank" href="https://github.com/Ekins21k/">
                Vitalii "ekins" Datsuk
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Col>
    </>
  );
};

export default Footer;

