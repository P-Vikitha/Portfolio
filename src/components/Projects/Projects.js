import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Management System"
              description="A Hotel Management System is a software application that helps hotels manage their operations, including reservations, check-ins, check-outs, billing, and reporting. It streamlines processes, improves efficiency, and enhances the guest experience by providing features like online booking, room management, and customer relationship management using mern Stack."
              ghLink="https://github.com/P-Vikitha/Hostel-management-system"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Brain Child"
              description="Developed ’Brain Child,’ an online education application using the MERN stack (MongoDB,
Express.js, React, Node.js). The platform offers educational resources and tools, including a student portal
for accessing materials and tests, and a logistic regression model for analyzing test results. Additionally, it
features a parent dashboard for monitoring student activity and time spent on the application."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Pixil AI"
              description="I designed a website using Next.js and Supabase that leverages Gen AI to generate images based on user inputs. The project combines cutting-edge technology to offer a seamless and interactive experience, allowing users to create custom images through AI."
            
              demoLink="https://www.pixil.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
