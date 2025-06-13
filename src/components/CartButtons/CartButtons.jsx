import styles from "./CartButtons.module.scss";

export default function CartButtons({ onClear, onOrder }) {
  return (
    <div className={styles.buttonsBlock}>
      <button
        onClick={onClear}
        className={styles.buttonClearCart}>
        Clear Cart
      </button>
      <button onClick={onOrder}>Create an Order</button>
    </div>
  );
}
