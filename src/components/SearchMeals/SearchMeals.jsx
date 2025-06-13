import styles from "./SearchMeals.module.scss";
import { useSearch } from "../../context/SearchContext";

export default function SearchMeals() {
  const { closeSearchHandler, searchOpen, searchQuery, setSearchQuery } = useSearch();

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const inputContent = (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for meals..."
        value={searchQuery}
        onChange={handleChange}
      />
      <button
        onClick={closeSearchHandler}
        className={styles.searchClose}>
        <span>×</span>
      </button>
    </div>
  );

  return searchOpen ? inputContent : null;
}
