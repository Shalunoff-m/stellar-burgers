import React from "react";
import styles from "./header.module.css";

export function Header(props) {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.wrapper}>
        {props.children}

        {/* <nav className={styles.menuList}>
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
        </nav> */}
        {/* <Logo />
        <TopMenuItem
          clickHandler={clickHandler}
          name="Cabinet"
          Icon={ProfileIcon}
          description="Личный кабинет"
          active={activePage === "Cabinet" ? true : false}
        /> */}
      </div>
    </header>
  );
}

<nav className={styles.menuList}></nav>;
