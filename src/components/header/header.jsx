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
import classNames from 'classnames';

export function Header() {
  return (
    <header className={classNames(styles.header)}>
      <div className={styles.wrapper}>
        <Navigation>
          <NavItem Icon={BurgerIcon} to='/'>
            Конструктор
          </NavItem>
          <NavItem Icon={ListIcon} to='/order-feed'>
            Лента заказов
          </NavItem>
        </Navigation>
        <Logo />
        <Navigation>
          <NavItem Icon={ProfileIcon} to='/profile'>
            Личный кабинет
          </NavItem>
        </Navigation>
      </div>
    </header>
  );
}
