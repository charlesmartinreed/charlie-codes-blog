import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { generateID } from "./generateId";
import { generateSlug } from "./generateSlug";

const postsDir = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDir);
  const allPostsData = filenames.map((filename) => {
    // id is filename, minus filetype
    // const id = filename.replace(/\.md$/, "");
    const id = generateID();
    const slug = generateSlug(filename);

    // grab the file as a string
    const fullPath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // parse results with gray-matter
    const matterResult = matter(fileContents);
    console.log(matterResult);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}
