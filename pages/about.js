import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout title={"My name is Charles"}>
      <h1 className={utilStyles.heading2Xl}>👋🏿 I'm Charles. </h1>
      <p className={utilStyles.headingLg}>In simple terms, I'm a programmer.</p>
      <div className={utilStyles.textContainer}>
        <p>
          Primarily I work with the web, though I dabble with mobile development
          as well. My body of work can be found both on these pages and on my{" "}
          <a
            href="https://www.github.com/charlesmartinreed"
            target="_blank"
            rel="noreferrer"
          >
            Github.
          </a>
        </p>
        <p>
          I'm certainly not the most-knowledgable programmer on the web, but I'm
          always seeking new knoweledge. My intent is to share my learnings with
          you and I hope that you'll feel comfortable doing the same.
        </p>

        <p>
          Until I get around to actually integrating a comment section, however,
          you can reach me via{" "}
          <a href="mailto:charliesoandso@protonmail.com">email</a> or good ol'{" "}
          <a
            href="https://twitter.com/charlieisamood"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}
