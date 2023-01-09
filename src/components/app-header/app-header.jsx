import styles from "./app-header.module.css";
import utils from "../utils/utils.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TopMenuItem from "../top-menu-item/top-menu-item";

export default function AppHeader() {
  return (
    <header className={`${styles.header} ${utils.show}`}>
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
          {/* Проверка компонента */}
          {/* ПОКА НЕ РАБОТАЕТ */}
          {/* <TopMenuItem icon="BurgerIcon" type="primary" /> */}
          {/* Проверка компонента */}
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
