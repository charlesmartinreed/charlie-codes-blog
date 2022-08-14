import styles from "../styles/Search.module.css";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  function handleClick() {
    console.log("search button clicked");
  }

  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.searchIcon} onClick={() => handleClick()} />
    </div>
  );
}
