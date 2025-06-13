import styles from "./EmptySearchResult.module.scss";

export default function EmptySearchResult() {
  return <span className={styles.emptySearch}>No items were found...</span>;
}
