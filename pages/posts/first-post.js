import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import styles from "../../styles/Post.module.css";
import Layout from "../../components/Layout";

import { FaFacebook, FaTwitter, FaShare } from "react-icons/fa";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src=""
        strategy="lazyOnload"
        onLoad={() => console.log("script was succesfully loaded")}
      ></Script>

      <div className={styles.container}>
        <div className={styles.postContainer}>
          <h1 className={styles.title}>First Post!</h1>
          <p className={styles.postContents}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptatibus, accusamus animi quia ex suscipit dicta fugiat error
            deleniti commodi adipisci ut eligendi minus alias.
          </p>
          <p className={styles.postContents}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            a repellat culpa debitis eum assumenda earum sit architecto quia
            suscipit! Ipsum asperiores sed nobis quisquam beatae fuga illum
            adipisci, exercitationem corporis recusandae. Animi asperiores nam
            odio maiores repellendus ratione enim vitae iste, perspiciatis ullam
            vero quod nulla doloribus iure eius aut repellat quas pariatur
            voluptate porro magnam voluptas. Sint expedita blanditiis modi
            tenetur. Sed, commodi blanditiis iure cum fugit perspiciatis saepe
            corrupti quod fuga non eaque reiciendis dolor possimus quasi, at
            modi accusamus. Magnam minus, modi assumenda consequatur laboriosam
            quam debitis error porro, ut consectetur expedita blanditiis sunt
            veniam consequuntur beatae dicta quis voluptatum nisi illo?
            Temporibus perspiciatis maiores sequi non quas nemo dolores iure
            delectus. Ipsa ad ipsam ab sunt placeat? Vitae, reprehenderit ea?
          </p>
          <p className={styles.postContents}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            error culpa voluptatum quo accusamus. Repudiandae, quo doloremque!
            Quam voluptatem eaque culpa blanditiis, deleniti, incidunt eos nulla
            eligendi accusantium ab rem facilis quidem aut velit dolor alias
            quis! Iusto impedit minus ab atque totam laudantium doloremque
            reprehenderit optio est temporibus excepturi sequi dolore aspernatur
            omnis numquam ipsa, non perferendis dicta ex! Necessitatibus,
            laboriosam omnis quia earum, fugit numquam ex inventore cupiditate
            ab id alias eos dolores harum eum fuga ad maiores ut doloribus.
            Ullam in reiciendis hic?
          </p>
          <div>
            <Link href="/">
              <button className={styles.homeBtn}>Return Home</button>
            </Link>
          </div>
        </div>
        <div className={styles.iconContainer}>
          <a href="#!" title="Share on Facebook">
            <FaFacebook className={styles.icons} />
          </a>
          <a href="#!" title="Share on Twitter">
            <FaTwitter className={styles.icons} />
          </a>
          <a href="#!" title="Copy Link To Blog Post">
            <FaShare className={styles.icons} />
          </a>
        </div>
      </div>
    </>
  );
}
