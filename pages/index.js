import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import Posts from "../components/Posts";
import { getSortedPostsData } from "../lib/getPosts";

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

          <Posts posts={posts} />
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPostsData();

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
