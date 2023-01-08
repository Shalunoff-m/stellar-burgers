import styles from "./app-header.module.css";
import utils from "../utils/utils.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.wrapper}>
        <nav className={styles.menuList}>
          <div className={`${styles.menuItem} m-5`}>
            <BurgerIcon type="primary" />
            <p className="p-2 text text_type_main-default">Конструктор</p>
          </div>
          <div className={`${styles.menuItem} m-5`}>
            <ListIcon type="secondary" />
            <p className="p-2 text text_type_main-default">Лента заказов</p>
          </div>
        </nav>
        <Logo />
        <div className={`${styles.menuItem} m-5`}>
          <ProfileIcon type="secondary" />
          <p className="p-2 text text_type_main-default">Личный кабинет</p>
        </div>
      </div>
    </header>
  );
}
