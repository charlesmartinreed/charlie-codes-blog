import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";
import styles from "../../styles/Post.module.css";

import { getAllPostSlugs, getPostData } from "../../lib/getPosts";
import { handleSharing } from "../../lib/shareSheets";

import { FaFacebook, FaTwitter, FaShare, FaHome } from "react-icons/fa";

export default function FirstPost({ postData }) {
  return (
    <Layout title={postData.title}>
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <h1 className={styles.title}>{postData.title}</h1>
          <h4 className={styles.postDate}>{postData.dateCreated}</h4>
          <p className={styles.postContents}>{postData.content}</p>
        </div>
        <div className={styles.iconContainer}>
          <Link href="/">
            <a title="Back to Home Page">
              <FaHome className={styles.icons} />
            </a>
          </Link>
          <a
            href="#!"
            title="Share on Facebook"
            onClick={() => handleSharing("facebook")}
          >
            <FaFacebook className={styles.icons} />
          </a>
          <a
            href="#!"
            title="Share on Twitter"
            onClick={() => handleSharing("twitter")}
          >
            <FaTwitter className={styles.icons} />
          </a>
          <a
            href="#!"
            title="Copy Link To Blog Post"
            onClick={() => handleSharing("web")}
          >
            <FaShare className={styles.icons} />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // return an array of possible slug values
  const paths = getAllPostSlugs();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch data for the blog post, using the slug pulled from params
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
