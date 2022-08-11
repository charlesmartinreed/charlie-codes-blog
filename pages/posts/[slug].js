import Link from "next/link";
import Layout from "../../components/Layout";
import Footer from "../../components/Footer";

import styles from "../../styles/Post.module.css";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { getAllPostSlugs, getPostData } from "../../lib/getPosts";
import { formatDate } from "../../lib/dateFormatter";

import { FaFacebook, FaTwitter, FaArrowAltCircleLeft } from "react-icons/fa";

export default function FirstPost({ postData }) {
  const router = useRouter();
  const currentURLRef = useRef(null);

  useEffect(() => {
    if (router.isReady) {
      // keep an eye on this
      // the window URL SHOULD be ready at this point
      // if I'm reading the documentation correctly
      currentURLRef.current = window.location.href;
    }
  });

  return (
    <Layout title={postData.title} content={postData.summary}>
      <div className={styles.container}>
        <div className={styles.postContainer}>
          <h1 className={styles.title}>{postData.title}</h1>
          <h4 className={styles.postDate}>
            {formatDate(postData.dateCreated)}
          </h4>
          {/* <p className={styles.postContents}>{postData.content}</p> */}
          <p
            className={styles.postContents}
            dangerouslySetInnerHTML={{ __html: postData.contentHTML }}
          />
        </div>
        <div className={styles.iconContainer}>
          <Link href="/">
            <a title="Back to Home Page">
              <FaArrowAltCircleLeft className={styles.icons} />
            </a>
          </Link>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${currentURLRef.current}`}
            title="Share on Facebook"
            rel={currentURLRef.current}
          >
            <FaFacebook className={styles.icons} />
          </a>
          <a
            href={`https://www.twitter.com/intent/tweet?text=${postData.summary}`}
            title="Share on Twitter"
            rel={currentURLRef.current}
          >
            <FaTwitter className={styles.icons} />
          </a>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  // return an array of possible slug values
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // fetch data for the blog post, using the slug pulled from params
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
