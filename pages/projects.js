import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Projects() {
  const title = "Projects";
  return (
    <Layout title={title}>
      <h1 className={utilStyles.headingXl}>{title} Page</h1>
    </Layout>
  );
}
