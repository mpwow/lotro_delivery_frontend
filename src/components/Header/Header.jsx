import styles from "./Header.module.scss";
import BrandSection from "./BrandSection/BrandSection";
import ControlSection from "./ControlSection/ControlSection";

export default function Header() {
  return (
    <header
      className={styles.header}
      role="banner">
      <BrandSection />
      <ControlSection />
    </header>
  );
}
