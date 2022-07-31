import Head from "next/head";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Footer from "../components/Footer";

export const siteTitle = "Minimum Viable";

export default function Layout({ children, title, content }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="og:description"
          content={
            content
              ? content
              : "programming, art, content creation, music, javascript, html, css"
          }
        />
        <meta name="og:title" content={title ? title : siteTitle} />
        <title>{title ? title : siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {children}
        <Footer />
      </main>
    </div>
  );
}
