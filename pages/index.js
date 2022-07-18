import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";

import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <main>
          <h1 className={styles.title}>{siteTitle}</h1>

          <p className={styles.description}>
            <code className={styles.code}>
              TODO: Put a witty phrase here later!
            </code>
          </p>

          <div className={styles.grid}>
            <ul>
              <li>
                <h3>
                  <Link href="/posts/first-post">
                    <a className={styles.link}>What this blog is and is not.</a>
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/posts/first-post">
                    <a className={styles.link}>What this blog is and is not.</a>
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/posts/first-post">
                    <a className={styles.link}>What this blog is and is not.</a>
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/posts/first-post">
                    <a className={styles.link}>What this blog is and is not.</a>
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/posts/first-post">
                    <a className={styles.link}>What this blog is and is not.</a>
                  </Link>
                </h3>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </Layout>
  );
}
