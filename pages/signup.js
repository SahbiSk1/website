import React, { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import NavigationButtons from "../Layout/components/NavigationButtons";
import styles from "../styles/signup.module.css";
import NavigationComponent from "../Layout/components/NavigationComponent";
import api from "../utils/api";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const signup = () => {
  const [user, setUser] = useState({
    "First Name": "",
    "Last Name": "",
    Email: "",
    Password: "",
    "Repeat Password": "",
  });

  const [cookies, setCookie] = useCookies();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await api.post("/api/auth/register", {
        firstName: user["First Name"],
        lastName: user["Last Name"],
        email: user.Email,
        password: user.Password,
      });

      setCookie("jwt", cookies.jwt);
      if (cookies.jwt) router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cookies.jwt) router.push("/");
  }, [cookies.jwt]);

  return (
    <div>
      <NavigationButtons />
      <Layout>
        <div className={styles.container}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <NavigationComponent />
            <div className={styles.miniFieldsContainer}>
              {Object.keys(user)
                .slice(0, 2)
                .map((field, i) => (
                  <input
                    key={i}
                    className={styles.field}
                    name={field}
                    type={field}
                    value={user[field]}
                    placeholder={`${field}*`}
                    onChange={(e) =>
                      setUser({ ...user, [field]: e.target.value })
                    }
                  />
                ))}
            </div>
            {Object.keys(user)
              .slice(2, 5)
              .map((field, i) => (
                <input
                  required
                  key={i}
                  className={styles.field}
                  name={field}
                  type={field}
                  value={user[field]}
                  placeholder={`${field}*`}
                  onChange={(e) =>
                    setUser({ ...user, [field]: e.target.value })
                  }
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

export default signup;
