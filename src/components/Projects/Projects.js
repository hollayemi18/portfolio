import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import port5 from "../../Assets/port5.png";
import port6 from "../../Assets/port6.png";
import port7 from "../../Assets/port7.png";
import port8 from "../../Assets/port8.png";
//import port9 from "../../Assets/port9.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={port6}
              isBlog={false}
              title="Ease"
              description="A professional fashion webapp, that allows user to create dashboard, to be able order online sewing and also manage their measurement and wallet "
              ghLink="https://github.com/hollayemi/tailor"
              demoLink="https://tailor-3e4r.onrender.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port8}
              isBlog={false}
              title="Online store"
              description="An online store that help small store scale up and promote their buisness giving them the function of displaying goods and alos stat about how the items are manage, with a feature of payment gateway"
              demoLink="https://jsutshup.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port5}
              isBlog={false}
              title="Google api"
              description="A map created with google api to allow search and locate a particular point on the map"
              ghLink="https://github.com/hollayemi18/python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port7}
              isBlog={false}
              title="Login Auth"
              description="A login created that uses cookies and token ,served with tailwind and html , cooked with django.And alos uses google authentication to sign in and sign up"
              demoLink="https://jsutshup.com/login/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
