// import { UserMenu } from "../../entities/user/ui/UserMenu/UserMenu";
import { CurrentUser } from "../../features/CurrentUser/CurrentUser";
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
        {/* <UserMenu displayName="Svetlana" /> */}
      </div>
    </header>
  );
};
