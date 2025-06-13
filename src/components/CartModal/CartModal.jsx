import styles from "./CartModal.module.scss";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import CartButtons from "../CartButtons/CartButtons";

export default function CartModal() {
  const { cartIsOpened, closeCart, cartItems, clearCart, addToCart, removeFromCart, removeCurrentItemFromCart } = useCart();

  if (!cartIsOpened) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={closeCart}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.cartTitle}>My Cart</h2>
        {cartItems.length == 0 ? (
          <span>Cart is empty. For now...</span>
        ) : (
          cartItems.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.meal.id}
                cartItem={cartItem}
                onAdd={() => addToCart(cartItem.meal)}
                onRemove={() => removeFromCart(cartItem.meal)}
                onDelete={() => removeCurrentItemFromCart(cartItem.meal)}
              />
            );
          })
        )}
        <CartButtons
          onClear={clearCart}
          onOrder={() => {
            console.log("There will be order modal soon...");
          }}
        />
        <button
          onClick={closeCart}
          className={styles.buttonClose}>
          X
        </button>
      </div>
    </div>
  );
}
