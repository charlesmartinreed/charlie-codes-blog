import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/archives">
        <a>Archives</a>
      </Link>
      <span>{"{ }"}</span>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      {/* for the time being, until I suss out the projects layout... it's outta here! */}
      <Link href="#">
        <a>Reach Out</a>
      </Link>
    </footer>
  );
}
