import React from "react";
import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Image,
  Space,
} from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import photo1 from "../../assets/images/Anes1.jpg";
import photo2 from "../../assets/images/anes2.jpg";
import cv from "../../assets/docs/Jean-Luc-Habimana-CV.pdf";
import styles from "./styles"; // Custom styles

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <Row justify="center" style={styles.container}>
      <Col xs={24} md={20} lg={16}>
        <Card bordered={false} style={styles.card}>
          {/* Profile Photos */}
          <Row justify="center" gutter={[16, 16]} style={styles.photoRow}>
            {[photo1, photo2].map((photo, index) => (
              <Col key={index} xs={24} sm={12} md={8} style={styles.photoCol}>
                <Image
                  src={photo}
                  alt={`Jean Luc ${index + 1}`}
                  width={150}
                  height={150}
                  preview={false}
                  style={styles.profileImage}
                />
              </Col>
            ))}
          </Row>

          {/* Introduction */}
          <Title level={2} style={styles.title}>About Me</Title>
          <Paragraph style={styles.paragraph}>
            Hello! I'm <b>Jean Luc Habimana</b>, a passionate Full Stack Software Engineer and Clinical Officer Anesthetist.
            Currently at <b>Rwamagana Level Two Teaching Hospital</b>, I combine my healthcare background with modern
            technology to create impactful solutions.
          </Paragraph>

          <Paragraph style={styles.paragraph}>
            I specialize in building scalable web and mobile applications that solve real-world problems.
          </Paragraph>

          {/* Skills */}
          <Title level={4}>Skills</Title>
          <ul style={styles.list}>
            <li>JavaScript (React, Node.js, Express)</li>
            <li>Python (Django, Flask)</li>
            <li>Mobile (React Native, Flutter)</li>
            <li>Databases (MongoDB, PostgreSQL, MySQL)</li>
            <li>Cloud (AWS, Azure)</li>
            <li>Version Control (Git, GitHub)</li>
            <li>UI/UX Design, API Integration</li>
            <li>Healthcare Informatics</li>
          </ul>

          {/* Education */}
          <Title level={4}>Education</Title>
          <ul style={styles.list}>
            <li>Bachelor’s Degree in Anesthesia at University of Rwanda</li>
            <li>Certification of Full Stack Software Engineer ALX Africa</li>
          </ul>

          <Paragraph style={styles.paragraph}>
            I’m open to exciting opportunities and collaborations. Let’s connect or feel free to download my CV.
          </Paragraph>

          {/* Call to Action Buttons */}
          <Space style={styles.buttonSpace}>
            <Button
              type="primary"
              size="large"
              href={cv}
              download="Jean-Luc-Habimana-CV.pdf"
            >
              Download CV
            </Button>
            <Button type="default" size="large" href="/contactus">
              Contact Me
            </Button>
          </Space>

          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            <Title level={5} style={{ marginTop: 32 }}>Connect with me</Title>
            <Space size="large">
              <a
                href="https://www.facebook.com/habimana.jeanluc.39"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FacebookOutlined style={styles.icon} />
              </a>
              <a
                href="https://www.linkedin.com/in/jean-luc-habimana-975626223/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinOutlined style={styles.icon} />
              </a>
              <a
                href="https://x.com/Fiston41868386"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <TwitterOutlined style={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/pumuluc9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramOutlined style={styles.icon} />
              </a>
            </Space>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
