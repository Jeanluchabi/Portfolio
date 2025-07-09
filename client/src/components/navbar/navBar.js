import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import profileImage from "../../assets/images/profile.jpg"; 
import { useNavigate } from "react-router-dom"; 

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav style={styles.navBar}>
      <img src={profileImage} 
        alt="Profile"
        style={styles.profileImage}
        onClick={() => navigate("/about")} 
      />

      <ul style={styles.navList}>
        {["/", "/about", "/projects", "/contactus"].map((path, index) => {
          const labels = ["Home", "About", "Projects", "Contact Us"];
          return (
            <li key={index}>
              <NavLink
                to={path}
                end={path === "/"}
                style={({ isActive }) =>
                  isActive
                    ? { ...styles.link, ...styles.activeLink }
                    : styles.link
                }
              >
                {labels[index]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;