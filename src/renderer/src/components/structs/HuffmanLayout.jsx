import React from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Outlet } from "react-router";
import Icon from "../../assets/AvatarRemoveBg.png";
import { Link } from "react-router-dom";
import { BiCode, BiKey, BiInfoCircle, BiError, BiHome, BiAnalyse } from "react-icons/bi";

function HuffmanLayout() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2} md={2} lg={2} xl={2} className="sidebar">
          <div className="sidebar-header justify-content-center align-content-center d-flex">
            <Image src={Icon} width={64} height={64} roundedCircle />
          </div>
          <Nav className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="welcome" as={Link} to={"/"}>
                <BiHome /> Welcome
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="encode" as={Link} to={"/encoding"}>
                <BiCode /> Encode
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="decode" as={Link} to={"/decoding"}>
                <BiKey /> Decode
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="visualize" as={Link} to={"/visualize"}>
                <BiAnalyse /> Visualize
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="info" as={Link} to={"/about"}>
                <BiInfoCircle /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="error" as={Link} to={"/ErrorPage"}>
                <BiError /> Error Page
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10} md={10} lg={10} xl={10} className="main-content">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default HuffmanLayout;
