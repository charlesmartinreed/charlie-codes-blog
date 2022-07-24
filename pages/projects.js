import Layout from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import projectStyles from "../styles/Project.module.css";
import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";

export default function Projects() {
  const title = "Some of My Work";

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
        </div>

        <div className={projectStyles.linkContainer}>
          <a href="https://www.github.com">
            <FaGithub />
          </a>
          <a href="https://www.github.com">
            <FaLink />
          </a>
        </div>
      </div>
    </Layout>
  );
}
