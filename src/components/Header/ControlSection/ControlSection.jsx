import styles from "./ControlSection.module.scss";
import CauldronIcon from "./CauldronIcon/CauldronIcon";
import ProfileIcon from "./ProfileIcon/ProfileIcon";
import SearchIcon from "./SearchIcon/SearchIcon";
import ControlButton from "./ControlButton/ControlButton";
import { useCart } from "../../../context/CartContext";
import { useSearch } from "../../../context/SearchContext";

export default function ControlSection() {
  const { cartItems, openCart } = useCart();
  const { openSearchHandler } = useSearch();

  const openCartHandler = () => {
    openCart();
  };

  const openSearchInput = () => {
    openSearchHandler();
  };

  return (
    <nav
      className={styles.controlSection}
      aria-label="User Controls">
      <ControlButton
        Icon={SearchIcon}
        text={"Search"}
        onClick={openSearchInput}
      />
      <ControlButton
        Icon={CauldronIcon}
        text={"Cart"}
        onClick={openCart}
      />
      <ControlButton
        Icon={ProfileIcon}
        text={"Profile"}
        onClick={() => {
          console.log("Clicked Profile");
        }}
      />
    </nav>
  );
}
