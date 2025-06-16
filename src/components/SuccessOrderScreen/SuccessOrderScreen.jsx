import styles from "./SuccessOrderScreen.module.scss";
import { useCart } from "../../context/CartContext";

export default function SuccessOrderScreen() {
  const { resultModalIsOpened, closeResultModal } = useCart();
  if (!resultModalIsOpened) return null;
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Thanks for your order!</h2>
        <span>Our chefs have already started preparing your order.</span>
        <button
          type="button"
          onClick={() => {
            closeResultModal();
          }}
          className={styles.buttonClose}>
          X
        </button>
        <button
          className={styles.mealButton}
          onClick={() => {
            closeResultModal();
          }}>
          Ok
        </button>
      </div>
    </div>
  );
}
