import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
