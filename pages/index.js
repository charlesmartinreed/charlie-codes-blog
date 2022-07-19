import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import Posts from "../components/Posts";

import styles from "../styles/Layout.module.css";

export default function Home({ posts }) {
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

          {/* <ul>
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
    </ul> */}

          <Posts posts={posts} />
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = [
    {
      id: 1,
      title: "GitHub Co-Pilot does kinda feel like magic, sometimes.",
      slug: "github-copilot-does-kinda-feel-like-magic-sometimes",
      date: "June 27, 2022",
    },
    {
      id: 2,
      title: "Programming is 50% problem solving, 50% problem creation",
      slug: "programming-is-50-problem-solving-50-problem-creation",
      date: "May 15, 2022",
    },
    {
      id: 3,
      title: "JavaScript is stuck in its Awkward Teen phase.",
      slug: "javascript-is-stuck-in-its-awkward-teen-phase",
      date: "April 3, 2022",
    },
    {
      id: 4,
      title: "CSS modules are starting to grow on me.",
      slug: "css-modules-are-starting-to-grow-on-me",
      date: "March 9, 2022",
    },
    {
      id: 5,
      title: "What this blog is and isn't",
      slug: "what-this-blog-is-and-isnt",
      date: "February 11, 2022",
    },
  ];

  // const data = [
  //   { id: 1, title: "blah blah", slug: "blah-blah", date: new Date() },
  // ];

  // const posts = JSON.stringify(data);

  return {
    props: {
      posts,
    },
  };
}
