const styles = {
  layout: {
    minHeight: "100vh",
    backgroundColor: "#eef2f5",
  },
  header: {
    background: "#001529",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
  },
  headerTitle: {
    color: "#fff",
    margin: 0,
    fontSize: "2.2rem",
  },
  content: {
    padding: "80px 16px", // Slightly reduced vertical padding
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    textAlign: "center",
    width: "110%",              // Increased width
    maxWidth: "4000px",        // Increased max width
    padding: "60px 40px",      // Balanced height
    borderRadius: "16px",
    boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
    backgroundColor: "#ffffff",
  },
  cardTitle: {
    fontSize: "2.4rem",        // Slightly reduced from previous for balance
    marginBottom: "1.8rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    lineHeight: 1.9,
    marginBottom: "2.2rem",
    color: "#333",
  },
  inlineLink: {
    color: "#1890ff",
    fontWeight: "600",
    textDecoration: "underline",
  },
  button: {
    fontSize: "1.1rem",
    padding: "1rem 2rem",
  },
};

export default styles;
