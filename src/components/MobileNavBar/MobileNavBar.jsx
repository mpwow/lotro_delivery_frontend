import styles from "./MobileNavBar.module.scss";
import CauldronIcon from "../Header/ControlSection/CauldronIcon/CauldronIcon";
import ProfileIcon from "../Header/ControlSection/ProfileIcon/ProfileIcon";
import SearchIcon from "../Header/ControlSection/SearchIcon/SearchIcon";
import ControlButton from "../Header/ControlSection/ControlButton/ControlButton";

export default function ControlSectionMobile() {
  return (
    <nav
      className={styles.mobileNavBar}
      aria-label="User Controls">
      <ControlButton
        Icon={SearchIcon}
        text={"Search"}
        onClick={() => {
          console.log("Clicked Search");
        }}
      />
      <ControlButton
        Icon={CauldronIcon}
        text={"Cart"}
        onClick={() => {
          console.log("Clicked Cart");
        }}
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
