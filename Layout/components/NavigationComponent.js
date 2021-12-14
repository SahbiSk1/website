import React from "react";
import styles from "../../styles/NavigationComponent.module.css";
import login from "../../public/login.png";
import register from "../../public/register.png";
import check from "../../public/checked.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NavigationComponent = () => {
  const componenets = [
    {
      link: "/signup",
      icon: register,
      title: "Register",
      text: "Browse and find what you need.",
    },
    {
      link: "/login",
      icon: login,
      title: "Sign in",
      text: "Already have an account, then welcome back.",
    },
  ];
  const { pathname } = useRouter();

  return (
    <div className={styles.container}>
      <div
        className={styles.check}
        style={pathname === "/login" ? { left: "90%" } : { left: "4%" }}
      >
        <Image src={check} />
      </div>
      {componenets.map(({ link, icon, title, text }, i) => (
        <Link href={link} key={i}>
          <div
            className={styles.comp}
            style={
              title === "Register"
                ? null
                : {
                    borderLeft: "2px solid var(--color-grey-md)",
                  }
            }
          >
            <div className={styles.img}>
              <Image src={icon} />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NavigationComponent;
