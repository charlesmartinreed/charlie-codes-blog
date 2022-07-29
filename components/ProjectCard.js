import projectStyles from "../styles/Project.module.css";
import Image from "next/image";
import {
  FaGithub,
  FaMailBulk,
  FaExternalLinkAlt,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";

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
      <div className={projectStyles.btnContainer}>
        <button className={projectStyles.btn}>
          <FaArrowCircleLeft />
        </button>
        <button className={projectStyles.btn}>
          <FaArrowCircleRight />
        </button>
      </div>
    </>

    // <div className={projectStyles.projectContainer} key={project.title}>
    //   <div className={projectStyles.imgContainer}>
    //     <Image
    //       width={800}
    //       height={300}
    //       alt={""}
    //       src={project.project_img_src}
    //     />
    //   </div>

    //   <div className={projectStyles.descriptionContainer}>
    //     <h1 className={projectStyles.heading2Xl}>{project.project_title}</h1>
    //     <p className={projectStyles.flavorText}>
    //       {project.project_description}
    //     </p>
    //     <div className={projectStyles.linkContainer}>
    //       <a href={project.project_github} title="View Project on GitHub">
    //         <FaGithub />
    //       </a>
    //       <a href={project.project_website} title="View the Site">
    //         <FaExternalLinkAlt />
    //       </a>
    //       <a
    //         mailto="charliesoandso@protonmail.com"
    //         title="Want to comission a site like this one? Contact me!"
    //       >
    //         <FaMailBulk />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}
