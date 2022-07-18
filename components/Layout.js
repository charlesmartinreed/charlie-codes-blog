import Head from "next/head";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Minimum Viable";

export default function Layout({ children, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="programming, art, content creation, music, javascript, html, css"
        />
        <meta name="og:title" content={title ? title : siteTitle} />
        <title>{title ? title : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/archives">
          <a>Archives</a>
        </Link>
        <Link href="/projects">
          <a>My Works</a>
        </Link>
        <Link href="/about">
          <a>A Bit About Me</a>
        </Link>
      </footer>
    </div>
  );
}
