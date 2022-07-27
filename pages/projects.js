import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

export async function loadProjects() {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const data = await res.json();

  return data;
}

export default function Projects({ projects }) {
  const title = "Projects";

  return (
    <Layout title={title}>
      {projects.map((project) => (
        <>
          <ProjectCard project={project} key={project.title} />
        </>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await loadProjects();
  return { props: { projects: projects["projects"] } };
}
