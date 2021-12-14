import React from "react";
import styles from "../../styles/Navigation.module.css";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className={styles.navContainer}>
      <Link href={"/signup"}>
        <button>Register</button>
      </Link>
      <Link href={"/login"}>
        <button>Sign in</button>
      </Link>
    </div>
  );
};

export default Navigation;
