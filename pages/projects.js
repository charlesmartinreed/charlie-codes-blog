import Layout from "../components/Layout";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
// import { loadProjects } from "../lib/getProjects";
import { projects } from "../data/projects.json";

export default function Projects({ projects }) {
  const title = "Projects";

  return (
    <Layout title={title}>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { projects } };
}
