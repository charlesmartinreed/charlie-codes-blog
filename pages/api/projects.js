const projectJSON = require("../../data/projects.json");

export default function handler(req, res) {
  res.status(200).json(projectJSON);
}

export async function getStaticProps() {}
