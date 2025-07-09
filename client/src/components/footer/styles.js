// styles.js

const styles = {
  footer: {
    backgroundColor: "#1e1e2f",
    padding: "1.5rem 3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    color: "#ffffff",
    flexWrap: "wrap",

    /* NEW: fix at bottom */
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    boxShadow: "0 -2px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },
  socialContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  iconLink: {
    display: "inline-block",
    width: "32px",
    height: "32px",
    transition: "transform 0.2s",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  separator: {
    margin: "0 1rem",
    color: "#555",
    fontSize: "1.2rem",
  },
  contactLink: {
    color: "#00bfff",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.2s",
  },
  contactLinkHover: {
    color: "#ffffff",
  },
  dateTime: {
    fontSize: "0.9rem",
    color: "#aaa",
  },
};

export default styles;
