import styles from "./MobileNavBar.module.scss";
import CauldronIcon from "../Header/ControlSection/CauldronIcon/CauldronIcon";
import ProfileIcon from "../Header/ControlSection/ProfileIcon/ProfileIcon";
import SearchIcon from "../Header/ControlSection/SearchIcon/SearchIcon";
import ControlButton from "../Header/ControlSection/ControlButton/ControlButton";
import { useSearch } from "../../context/SearchContext";
import { useCart } from "../../context/CartContext";

export default function ControlSectionMobile() {
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
      className={styles.mobileNavBar}
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
