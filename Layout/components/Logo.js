import React from "react";
import styles from "../../styles/Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.orange}></div>
      <div className={styles.blue}></div>
    </div>
  );
};

export default Logo;
