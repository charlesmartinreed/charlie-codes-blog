import Layout from "../components/Layout";
import errorStyles from "../styles/Error.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <main className={errorStyles.main}>
      <h1 className={errorStyles.heading}>Nope.</h1>
    </main>
  );
}
