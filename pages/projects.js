import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/Project.module.css";
import Image from "next/image";
import { FaGithub, FaLink, FaMailBulk } from "react-icons/fa";

export async function loadProjects() {
  const res = await fetch(`http://localhost:3000/api/projects`);
  const data = await res.json();

  return data;
}

export default function Projects({ projects }) {
  const title = "Projects";

  return (
    <Layout title={title}>
      {projects["projects"].map((project) => (
        <>
          <div className={projectStyles.projectContainer}>
            <div className={projectStyles.imgContainer}>
              <Image
                width={800}
                height={300}
                alt={""}
                src={project.project_img_src}
              />
            </div>

            <div className={projectStyles.descriptionContainer}>
              <div>
                <h1 className={projectStyles.heading2Xl}>
                  {project.project_title}
                </h1>
              </div>
              <div>
                <p className={projectStyles.flavorText}>
                  {project.project_description}
                </p>
              </div>
              <div className={projectStyles.linkContainer}>
                <a href={project.project_github} title="View Project on GitHub">
                  <FaGithub />
                </a>
                <a href={project.project_website} title="View the Site">
                  <FaLink />
                </a>
                <a
                  mailto="charliesoandso@protonmail.com"
                  title="Want to comission a site like this one? Contact me!"
                >
                  <FaMailBulk />
                </a>
              </div>
            </div>
          </div>
        </>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await loadProjects();
  console.log(projects);
  return { props: { projects } };
}
