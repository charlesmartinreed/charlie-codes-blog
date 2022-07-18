import Head from "next/head";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

export const siteTitle = "Charlie Codes";

export default function Layout({ children, home }) {
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

      <main>{children}</main>
    </>
  );
}
