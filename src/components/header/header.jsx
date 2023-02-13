import React from "react";
import styles from "./header.module.css";
import { Navigation } from "../navigation/navigation";
import { NavItem } from "../nav-item/nav-item";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export function Header() {
  return (
    <header className={`${styles.header} `}>
      <div className={styles.wrapper}>
        <Navigation>
          <NavItem Icon={BurgerIcon} type="primary">
            Конструктор
          </NavItem>
          <NavItem Icon={ListIcon} type="secondary">
            Лента заказов
          </NavItem>
        </Navigation>
        <Logo />
        <NavItem Icon={ProfileIcon} type="secondary">
          Личный кабинет
        </NavItem>
      </div>
    </header>
  );
}
