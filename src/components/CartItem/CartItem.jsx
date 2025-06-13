import styles from "./CartItem.module.scss";

export default function CartItem({ cartItem, onAdd, onRemove, onDelete }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemNameContainer}>
        <button
          onClick={onDelete}
          className={styles.itemDelete}>
          X
        </button>
        <span className={styles.itemName}>{cartItem.meal.title}</span>
      </div>
      <div className={styles.mealCountContainer}>
        <span
          onClick={onRemove}
          className={styles.countControl}>
          —
        </span>
        <span className={styles.countText}>{cartItem.quantity}</span>
        <span
          onClick={onAdd}
          className={styles.countControl}>
          +
        </span>
      </div>
    </div>
  );
}
