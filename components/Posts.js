import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Posts({ posts }) {
  // const { id, slug, title, dateCreated, summary, content } = posts;

  return (
    <>
      <div className={styles.grid}>
        <h2 className={styles.descriptionSM}>Recent Posts</h2>
        <ul>
          {posts.map(({ id, slug, title, dateCreated, summary, content }) => (
            <li key={id}>
              <Link href={`/posts/${slug}`}>
                <a className={styles.link}>{title}</a>
              </Link>
              <small>{dateCreated}</small>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
