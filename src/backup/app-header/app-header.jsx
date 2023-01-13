import styles from "./app-header.module.css";
import utils from "../utils/utils.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import TopMenuItem from "../top-menu-item/top-menu-item";
import { useState } from "react";

export default function AppHeader() {
  const [activePage, setActivePage] = useState("Burger");

  function clickHandler(name) {
    setActivePage(name);
  }

  return (
    <header className={`${styles.header}`}>
      <div className={styles.wrapper}>
        <nav className={styles.menuList}>
          <TopMenuItem
            clickHandler={clickHandler}
            name="Burger"
            Icon={BurgerIcon}
            description="Конструктор"
            active={activePage === "Burger" ? true : false}
          />
          <TopMenuItem
            clickHandler={clickHandler}
            name="Orders"
            Icon={ListIcon}
            description="Лента заказов"
            active={activePage === "Orders" ? true : false}
          />
        </nav>
        <Logo />
        <TopMenuItem
          clickHandler={clickHandler}
          name="Cabinet"
          Icon={ProfileIcon}
          description="Личный кабинет"
          active={activePage === "Cabinet" ? true : false}
        />
      </div>
    </header>
  );
}
