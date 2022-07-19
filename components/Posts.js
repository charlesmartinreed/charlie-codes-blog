import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Posts({ posts }) {
  return (
    <>
      <div className={styles.grid}>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.slug}`}>
                <a className={styles.link}>{post.title}</a>
              </Link>
              <small>{post.date}</small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
