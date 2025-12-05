import styles from './Logo.module.css'
import LogoImg from './Logo.svg'

export const Logo = () => {
  return (
    <a href="/">
      <img src={LogoImg} alt="Логотип DesignSystem" className={styles.logo} />
    </a>
  );
};
