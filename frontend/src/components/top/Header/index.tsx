import Link from "next/link";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header>
      <p>葬儀・葬式・家族葬なら【きんぽう堂のお葬式】</p>
      <Link href={"/"}>
        <div className={styles.logo}>サイトロゴ</div>
      </Link>
    </header>
  );
};

export default Header;
