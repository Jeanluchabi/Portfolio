import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles";

import linkedinIcon from "../../assets/icons/linkedin.png";
import twitterIcon  from "../../assets/icons/twitter.jpeg";
import facebookIcon from "../../assets/icons/facebook.jpeg";
import instaIcon    from "../../assets/icons/instagram.jpeg";

const socialLinks = [
  { href: "https://www.linkedin.com/in/jean-luc-habimana-975626223/", icon: linkedinIcon, alt: "LinkedIn" },
  { href: "https://x.com/Fiston41868386",  icon: twitterIcon,  alt: "Twitter"  },
  { href: "https://www.facebook.com/habimana.jeanluc.39", icon: facebookIcon, alt: "Facebook" },
  { href: "https://www.instagram.com/pumuluc9/",icon: instaIcon,     alt: "Instagram"},
];

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.socialContainer}>
        {socialLinks.map((link) => (
          <a
            key={link.alt}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img
              src={link.icon}
              alt={link.alt}
              style={styles.iconImage}
            />
          </a>
        ))}

        <span style={styles.separator}>|</span>

        <Link
          to="/contactus"
          style={styles.contactLink}
          onMouseEnter={e => (e.currentTarget.style.color = styles.contactLinkHover.color)}
          onMouseLeave={e => (e.currentTarget.style.color = styles.contactLink.color)}
        >
          Contact Us
        </Link>
      </div>

      <div style={styles.dateTime}>
        {dateTime.toLocaleString()}
      </div>
    </footer>
  );
};

export default Footer;
