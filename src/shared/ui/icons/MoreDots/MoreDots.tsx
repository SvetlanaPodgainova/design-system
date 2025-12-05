import styles from "./MoreDots.module.css";

export const MoreDots = () => {
  return (
    <svg
      className={styles.dots}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M1.25 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM7.5 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM13.75 8.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      />
    </svg>
  );
};
