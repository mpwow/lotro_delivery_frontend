import styles from "./BrandSection.module.scss";
import logo from "../../../assets/logo.png";

export default function BrandSection() {
  return (
    <section className={styles.brandSection}>
      <img
        className={styles.logo}
        src={logo}
        alt="The Green Dragon logo"
      />
      <div className={styles.textBlock}>
        <h1 className={styles.title}>The Green Dragon</h1>
        <p className={styles.subtitle}>The beloved hobbit tavern</p>
      </div>
    </section>
  );
}
