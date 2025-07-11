import React from "react";
import styles from "./styles";

const WhatsAppButton = () => {
  const whatsappNumber = "+250780528494";
  return (
    <div style={styles.container}>
      <a
        href={`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
        title="Chat with us on WhatsApp"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/124/124034.png"
          alt="WhatsApp"
          style={styles.icon}
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
