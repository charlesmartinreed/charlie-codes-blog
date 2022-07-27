import Head from "next/head";
import Image from "next/image";
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
            <code className={styles.code}>TODO: Put a witty phrase here</code>
          </p>

          <Posts posts={posts} />
        </main>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const frontPagePostCount = 5;
  const posts = getSortedPostsData();

  // const data = [
  //   { id: 1, title: "blah blah", slug: "blah-blah", date: new Date() },
  // ];

  // const posts = JSON.stringify(data);

  return {
    props: {
      posts: posts.slice(0, frontPagePostCount),
    },
  };
}
