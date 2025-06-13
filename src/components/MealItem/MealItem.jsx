import styles from "./MealItem.module.scss";
import { useCart } from "../../context/CartContext";

export default function MealItem({ meal }) {
  const { addToCart, cartItems, removeFromCart } = useCart();

  const cartItem = cartItems.find((item) => item.meal.id === meal.id);
  const quantity = cartItem?.quantity || 0;

  const handleAddMealToCart = () => {
    addToCart(meal);
  };

  const handleRemoveMealFromCart = () => {
    removeFromCart(meal);
  };

  const addToCartButton = (
    <button
      className={styles.mealButton}
      onClick={handleAddMealToCart}
      disabled={!meal.isAvailableToOrder}>
      Add To Cart
    </button>
  );

  const quantityControls = (
    <div className={styles.mealCountContainer}>
      <span
        className={styles.countControl}
        onClick={handleRemoveMealFromCart}>
        —
      </span>
      <span className={styles.countText}>{quantity}</span>
      <span
        className={styles.countControl}
        onClick={handleAddMealToCart}>
        +
      </span>
    </div>
  );

  return (
    <div className={styles.mealItem}>
      <img
        className={styles.mealImg}
        src={meal.img}
        alt={meal.title}
      />
      <h3 className={styles.mealTitle}>{meal.title}</h3>
      <span className={styles.mealPrice}>{meal.formattedPrice}</span>
      <article className={styles.mealDescription}>{meal.description}</article>
      {quantity === 0 ? addToCartButton : quantityControls}
    </div>
  );
}
