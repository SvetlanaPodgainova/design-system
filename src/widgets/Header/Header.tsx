import { CurrentUser } from "../../features/current-user/ui/CurrentUser";
import { ThemeToggle } from "../../features/ThemeToggle/ThemeToggle";
import { Logo } from "../../shared/ui/Logo/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo />
        <ThemeToggle />
        <CurrentUser />      
      </div>
    </header>
  );
};
