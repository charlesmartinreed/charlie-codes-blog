import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout, siteTitle } from "../components/Layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{siteTitle}</h1>

        <p className={styles.description}>
          <code className={styles.code}>
            TODO: Put a witty phrase here later!
          </code>
        </p>

        <div className={styles.grid}>
          <h3 className="title">
            <Link href="/posts/first-post">
              <a className={styles.link}>What this blog is and is not.</a>
            </Link>
          </h3>
        </div>
      </main>
    </div>
  );
}
