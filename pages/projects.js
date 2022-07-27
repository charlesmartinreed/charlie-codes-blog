import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { loadProjects } from "../lib/getProjects";

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
  const projects = await loadProjects();
  return { props: { projects: projects["projects"] } };
}
