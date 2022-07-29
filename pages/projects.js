import Layout from "../components/Layout";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";
import projectStyles from "../styles/Project.module.css";
import { useState } from "react";

// import { loadProjects } from "../lib/getProjects";
import { projects } from "../data/projects.json";

export default function Projects({ projects }) {
  const title = "Projects";

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const [currentProject, setCurrentProject] = useState(
    projects[currentProjectIndex]
  );

  const passiveClass = `${projectStyles.carouselBtn}`;
  const activeClass = `${projectStyles.carouselBtn} ${projectStyles.active}`;

  const handleBtnClick = (newIndex) => {
    setCurrentProjectIndex(newIndex);

    const newProject = projects[newIndex];

    setCurrentProject(newProject);
  };

  return (
    <Layout title={title}>
      <ProjectCard project={currentProject} />
      <div className={projectStyles.carouselContainer}>
        {projects.map((project, index) => (
          <button
            className={
              index === currentProjectIndex ? activeClass : passiveClass
            }
            key={project.title}
            onClick={() => handleBtnClick(index)}
          ></button>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return { props: { projects } };
}
