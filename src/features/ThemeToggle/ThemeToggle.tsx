import { useTheme } from "../../shared/context/theme";
import styles from "./ThemeToggle.module.css";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={styles.toggle}
      role="switch"
      aria-checked={theme === "dark"}
    >
      <span className={styles.track}>
        <span className={styles.thumb}></span>
      </span>
    </button>
  );
};
