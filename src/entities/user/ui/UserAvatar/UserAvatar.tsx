import styles from "./UserAvatar.module.css";

type TUserAvatarProps = {
  displayName: string;
  avatarSrc?: string;
};

export const UserAvatar = ({ displayName, avatarSrc }: TUserAvatarProps) => {
  const initial = displayName?.charAt(0)?.toUpperCase();

  return (
    <div className={styles.avatar}>
      {avatarSrc ? (
        <img
          className={styles.image}
          src={avatarSrc}
          alt="Аватар пользователя"
        ></img>
      ) : (
        <span className={styles.name}>{initial ?? "?"}</span>
      )}
    </div>
  );
};
