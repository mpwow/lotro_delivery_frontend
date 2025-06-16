import styles from "./CartButtons.module.scss";

export default function CartButtons({ onClear, onOrder, isDisabled }) {
  return (
    <div className={styles.buttonsBlock}>
      <button
        onClick={onClear}
        disabled={isDisabled}
        className={styles.buttonClearCart}>
        Clear Cart
      </button>
      <button
        disabled={isDisabled}
        onClick={onOrder}>
        Create an Order
      </button>
    </div>
  );
}
