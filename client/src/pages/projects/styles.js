// src/pages/projects/styles.js

const styles = {
  container: {
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
    fontWeight: 700,
    color: "#001529",
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    height: 200,
    objectFit: "cover",
  },
  description: {
    color: "#555",
    minHeight: 60,
  },
  buttons: {
    marginTop: 20,
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
};

export default styles;
