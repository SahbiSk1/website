import React from "react";
import styles from "../../styles/Footer.module.css";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <p rel="noopener noreferrer">&copy; All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
