import styles from "../styles/Home.module.css";
import Layout from "../Layout/Layout";
import Logo from "../Layout/components/Logo";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

export default function Home() {
  const [cookies] = useCookies();
  const router = useRouter();

  useEffect(() => {
    if (!cookies.jwt) router.push("/login");
  }, []);

  return cookies.jwt ? (
    <div>
      <Layout>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <Logo />
          </div>
          <h1>The Logo Above is Made In Pure CSS</h1>
        </div>
      </Layout>
    </div>
  ) : null;
}
