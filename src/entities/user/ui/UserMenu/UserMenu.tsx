import { IconButton } from "../../../../shared/ui/IconButton/IconButton";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import styles from "./UserMenu.module.css";

type TUserMenuProps = {
  displayName: string | null;
  avatarSrc: string | null;
};

export const UserMenu = ({ displayName, avatarSrc }: TUserMenuProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.name}>{displayName}</span>
      <UserAvatar displayName={displayName} avatarSrc={avatarSrc} />
      <IconButton variant="chevron" ariaLabel="Открыть меню пользователя" />
    </div>
  );
};
