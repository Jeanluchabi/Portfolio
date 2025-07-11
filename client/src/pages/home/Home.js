import React from "react";
import { Layout, Typography, Button, Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles";

const { Header, Content }= Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Title style={styles.headerTitle} level={2}>
          Welcome to My Portfolio
        </Title>
      </Header>
      <Content style={styles.content}>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={24} md={12}>
            <Card variant="borderless" style={styles.card}>
              <Title level={3}>Hello, I'm Jean Luc!</Title>
              <Paragraph style={styles.paragraph}>
                I am a passionate developer specializing in both modern Mobile and Web applications.
                Explore my projects, learn more{" "}
                <Link to="/about" style={styles.inlineLink}>about me</Link>, or{" "}
                <Link to="/contactus" style={styles.inlineLink}>get in touch</Link>!
              </Paragraph>
              <Button type="primary" size="large" style={styles.button}>
                <Link to="/projects">View Projects</Link>
              </Button>
            </Card>
          </Col>
        </Row>
      </Content>
      </Layout>
  );
};

export default Home;
