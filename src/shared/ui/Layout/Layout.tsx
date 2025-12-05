import styles from "./Layout.module.css";

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: TLayoutProps) => {
  return <div className={styles.layout}>{children}</div>;
};
