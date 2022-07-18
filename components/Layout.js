import Head from "next/head";
import styles from "../styles/Layout.module.css";
const siteTitle = "Charlie Codes";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="programming, art, content creation, music, javascript, html, css"
        />
        <meta name="og:title" content={siteTitle} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>{children}</div>
    </>
  );
}
