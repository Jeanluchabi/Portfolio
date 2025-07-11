import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import styles from "./styles";
import axios from "axios";

const { Title } = Typography;

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); 

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await axios.post("https://formsubmit.co/ajax/jeanluchabi@gmail.com", {
        name: values.name,
        email: values.email,
        message: values.message,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      alert("✅ Message sent successfully!");
      form.resetFields(); // clear the form
    } catch (error) {
      alert("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.contactContainer}>
      <Title level={3} style={styles.contactTitle}>Get in Touch</Title>
      <Form
        form={form}
        layout="vertical"
        style={styles.contactForm}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Your name" style={styles.input} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="Your Email" style={styles.input} />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Please enter a message" }]}
        >
          <Input.TextArea rows={4} placeholder="Your message..." style={styles.textarea} />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={styles.submitButton}
        >
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
