import React from "react";
import { Card, Row, Col, Typography, Button } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import styles from "./styles";

// ✅ Image Imports
import portfolioImg from "../../assets/images/website.jpg";
import findmejobImg from "../../assets/images/findmejob.jpg";
import electronicsImg from "../../assets/images/electronics.jpg";

const { Title, Paragraph } = Typography;

// ✅ List of Projects
const projects = [
  {
    title: "My Portfolio Website",
    description: "A modern portfolio site built with React and Ant Design.",
    github: "https://github.com/Jeanluchabi/Portfolio",
    demo: "https://jeanluc-portfolio.netlify.app/",
    image: portfolioImg,
  },
  {
    title: "FindMeJob Platform",
    description: "A full-stack platform for job seekers and recruiters.",
    github: "https://github.com/Jeanluchabi/JobPost-Application",
    demo: "https://findmejob.netlify.app/",
    image: findmejobImg,
  },
  {
    title: "P&P Electronics",
    description: "An e-commerce website for buying electronics online.",
    github: "https://github.com/Jeanluchabi/P-P-Electronics",
    demo: "https://ppelectronics.netlify.app/", 
    image: electronicsImg, 
  },
  // Add more projects below
];

const Projects = () => {
  return (
    <div style={styles.container}>
      <Title level={2} style={styles.title}>My Projects</Title>
      <Row gutter={[24, 24]} justify="center">
        {projects.map((project, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={styles.image}
                />
              }
              style={styles.card}
            >
              <Title level={4} style={styles.cardTitle}>{project.title}</Title>
              <Paragraph style={styles.description}>{project.description}</Paragraph>
              <div style={styles.buttons}>
                {project.demo && (
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    href={project.demo}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                )}
                <Button
                  icon={<GithubOutlined />}
                  href={project.github}
                  target="_blank"
                  style={{ marginLeft: 12 }}
                >
                  GitHub
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
