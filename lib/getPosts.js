import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { remark } from "remark";
import html from "remark-html";

import { generateID } from "./generateId";
import { generateSlug } from "./generateSlug";

const postsDir = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const filenames = fs.readdirSync(postsDir);
  const allPostsData = filenames.map((filename) => {
    // id is filename, minus filetype
    // const id = filename.replace(/\.md$/, "");

    // grab the file as a string
    const fullPath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // parse results with gray-matter
    const matterResult = matter(fileContents);

    const { title, summary, date, tags } = matterResult.data;
    const slug = generateSlug(title);
    const dateCreated = new Date(date).toLocaleDateString();
    const { content } = matterResult;

    // console.log("title is", title);
    // console.log("id is", id);
    // console.log("slug is", slug);
    // console.log("created date is", dateCreated);
    // console.log("summary is", summary);

    return {
      id: generateID(),
      title,
      slug,
      dateCreated,
      tags,
      summary,
      content,
    };
  });

  return allPostsData.sort(({ dateCreated: a }, { dateCreated: b }) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((fn) => {
    return {
      params: {
        slug: fn.replace(/.md$/, ""),
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  // parse results with gray-matter
  const matterResult = matter(fileContents);

  const { title, summary, date, tags } = matterResult.data;
  const dateCreated = new Date(date).toJSON();

  const { content } = matterResult;

  const processedContent = await remark().use(html).process(content);
  const contentHTML = processedContent.toString();

  return {
    slug,
    tags,
    title,
    summary,
    contentHTML,
    dateCreated,
  };
}
