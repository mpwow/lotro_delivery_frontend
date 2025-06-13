import styles from "./ControlButton.module.scss";

export default function ControlButton({ Icon, text, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={styles.button}>
      <div className={styles.buttonIcon}>
        <Icon />
      </div>
      <span className={styles.buttonText}>{text}</span>
    </button>
  );
}
