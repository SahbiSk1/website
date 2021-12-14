import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import NavigationButtons from "../Layout/components/NavigationButtons";
import NavigationComponent from "../Layout/components/NavigationComponent";
import Layout from "../Layout/Layout";
import styles from "../styles/login.module.css";
import api from "../utils/api";
import { useCookies } from "react-cookie";

const login = () => {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
  });

  const [cookies, setCookie] = useCookies();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post("/api/auth/login", {
        email: user.Email,
        password: user.Password,
      });
      setCookie("jwt", cookies.jwt);
      if (cookies.jwt) router.push("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (cookies.jwt) router.push("/");
    console.log(cookies.jwt);
  }, [cookies.jwt]);

  return (
    <div>
      <NavigationButtons />
      <Layout>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <NavigationComponent />
            {Object.keys(user).map((field, i) => (
              <input
                key={i}
                className={styles.field}
                name={field}
                type={field}
                value={user[field]}
                placeholder={`${field}*`}
                onChange={(e) => setUser({ ...user, [field]: e.target.value })}
              />
            ))}
            <button className={styles.submit} type="submit">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default login;
