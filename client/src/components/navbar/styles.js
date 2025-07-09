// styles.js

const styles = {
  navBar: {
    backgroundColor: "#1e1e2f",
    padding: "1rem 3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  profileImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
    cursor: "pointer",
    marginRight: "2rem",       // space between image and nav items
    border: "2px solid #00bfff",
    transition: "transform 0.3s",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "3rem",
    margin: 0,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: "600",
    transition: "color 0.3s, border-bottom 0.3s",
    padding: "0.5rem 0",
    display: "inline-block",
  },
  activeLink: {
    color: "#00bfff",
    borderBottom: "2px solid #00bfff",
  },
};

export default styles;
