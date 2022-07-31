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
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Reach Out</a>
      </Link>
    </footer>
  );
}
