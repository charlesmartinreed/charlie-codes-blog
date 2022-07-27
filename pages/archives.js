import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { getSortedPostsData } from "../lib/getPosts";
import { useState } from "react";

export default function Archives({ posts }) {
  const title = "Archives";
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(posts[pageNumber]);

  const handlePageDecrement = () => {
    setPageNumber((pageNumber -= 1));
    setCurrentPosts(posts[pageNumber]);
    console.log("page number decrease by 1", pageNumber);
  };

  const handlePageIncrement = () => {
    setPageNumber((pageNumber += 1));
    setCurrentPosts(posts[pageNumber]);
    console.log("page number increase by 1", pageNumber);
  };

  return (
    <Layout title={title}>
      <h1 className={utilStyles.heading2Xl}>{title} Page</h1>
      <main className={utilStyles.main}>
        {currentPosts.map((post) => (
          <ul className={utilStyles.list} key={post.id}>
            <li className={utilStyles.listItem}>
              <Link href={`/posts/${post.slug}`}>
                <a className={utilStyles.link}>{post.title}</a>
              </Link>
            </li>
          </ul>
        ))}
        <div className={utilStyles.btnContainer}>
          <button
            className={utilStyles.btn}
            disabled={pageNumber <= 0 ? true : false}
            onClick={() => handlePageDecrement()}
          >
            Older
          </button>
          <button
            className={utilStyles.btn}
            disabled={
              pageNumber >= 0 && pageNumber < posts.length - 1 ? false : true
            }
            onClick={() => handlePageIncrement()}
          >
            Newer
          </button>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const pageItemCount = 10;
  const postData = getSortedPostsData();
  let posts = [];

  for (let i = 0; i < postData.length; i += pageItemCount) {
    posts.push(postData.slice(i, i + pageItemCount));
  }

  // console.log("LOGGING POSTS...");
  // console.log(posts);
  // console.log("....DONE LOGGING POSTS");
  // console.log("post length is", posts.length);

  return {
    props: {
      posts,
    },
  };
}
