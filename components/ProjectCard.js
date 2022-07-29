import projectStyles from "../styles/Project.module.css";
import Image from "next/image";
import { FaGithub, FaMailBulk, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  return (
    <>
      <div className={projectStyles.projectCard}>
        {/* child #1 */}
        <div className={projectStyles.imageContainer}>
          <Image
            className={projectStyles.image}
            layout="fill"
            alt={""}
            src={project.project_img_src}
          />
        </div>
        {/* child #2 */}
        <div className={projectStyles.textContainer}>
          <h1>{project.project_title}</h1>
          <p>{project.project_description}</p>
        </div>

        {/* child #3 */}
        <div className={projectStyles.linkContainer}>
          <a href={project.project_github} title="View Project on GitHub">
            <FaGithub />
          </a>
          <a href={project.project_website} title="View the Site">
            <FaExternalLinkAlt />
          </a>
          <a
            mailto="charliesoandso@protonmail.com"
            title="Want to comission a site like this one? Contact me!"
          >
            <FaMailBulk />
          </a>
        </div>
      </div>
    </>
  );
}
