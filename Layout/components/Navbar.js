import React from "react";
import Logo from "./Logo";
import styles from "../../styles/Navbar.module.css";

const navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        <li className={styles.listItem}>
          <a>Home</a>
        </li>
        <li className={styles.listItem}>
          <a> About us </a>
        </li>

        <li className={styles.listItem}>
          <a>Contact us</a>
        </li>
      </ul>
      <div className={styles.Ar}>
        <p>Ar </p>
      </div>
    </div>
  );
};

export default navbar;
