import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  const title = "About";
  return (
    <Layout title={title}>
      <h1 className={utilStyles.headingXl}>{title} Page</h1>
    </Layout>
  );
}
