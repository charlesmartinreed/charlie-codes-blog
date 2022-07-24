import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/Project.module.css";
import Image from "next/image";
import { FaGithub, FaLink, FaMailBulk } from "react-icons/fa";

export default function Projects() {
  const title = "Projects";

  return (
    <Layout title={title}>
      <div className={projectStyles.projectContainer}>
        <div className={projectStyles.imgContainer}>
          <Image
            width={800}
            height={300}
            alt={""}
            src={"/images/project-temp-img.png"}
          />
        </div>

        <div className={projectStyles.descriptionContainer}>
          <div>
            <h1 className={projectStyles.heading2Xl}>Project Title</h1>
          </div>
          <div>
            <p className={projectStyles.flavorText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, reiciendis necessitatibus cupiditate optio id
              voluptatum consectetur ex obcaecati! Ducimus culpa, quia
              cupiditate porro repellendus quisquam.
            </p>
          </div>
          <div className={projectStyles.linkContainer}>
            <a href="https://www.github.com" title="View Project on GitHub">
              <FaGithub />
            </a>
            <a href="https://www.github.com" title="View the Site">
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
    </Layout>
  );
}
