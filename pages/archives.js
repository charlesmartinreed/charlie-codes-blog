import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Archives() {
  const title = "Archives";
  return (
    <Layout title={title}>
      <h1 className={utilStyles.headingXl}>{title} Page</h1>
    </Layout>
  );
}
