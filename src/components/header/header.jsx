import React from 'react';
import styles from './header.module.css';
import { Navigation } from '../navigation/navigation';
import { NavItem } from '../nav-item/nav-item';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

export function Header() {
  return (
    <header className={`${styles.header} `}>
      <div className={styles.wrapper}>
        <Navigation>
          <NavItem Icon={BurgerIcon} to='/'>
            Конструктор
          </NavItem>
          <NavItem Icon={ListIcon} to='/123'>
            Лента заказов
          </NavItem>
        </Navigation>
        <Logo />
        <NavItem Icon={ProfileIcon} to='/467'>
          Личный кабинет
        </NavItem>
      </div>
    </header>
  );
}
