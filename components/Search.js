import styles from "../styles/Search.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  function handleInput(searchInput) {
    const resultsDiv = document.querySelector(".searchResults");
    resultsDiv.classList.add("display");
    console.log(searchInput);
  }

  return (
    <div className={styles.searchContainer}>
      <input
        placeholder="Search"
        className={styles.searchInput}
        type="search"
        onChange={(e) => handleInput(e.target.value)}
      ></input>
      <div className={styles.searchResults}></div>
    </div>
  );
}
