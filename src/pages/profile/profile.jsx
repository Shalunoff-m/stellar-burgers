import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import {
  NavLink,
  Navigate,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout, userUpdate } from '../../store/actions/user';
import { ProfileLink } from '../../components/profile-link/profile-link';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const exitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    <Navigate to='/login' replace state={{ from: location.pathname }} />;
  };

  return (
    <div className={classNames(styles.box)}>
      <div className={classNames(styles.section, 'pr-15')}>
        <nav className={classNames(styles.nav, 'pb-20')}>
          <ProfileLink to='/profile' end>
            Профиль
          </ProfileLink>
          <ProfileLink to='/profile/orders'>История заказов</ProfileLink>
          <ProfileLink to='/' onClick={exitHandler}>
            Выход
          </ProfileLink>
        </nav>
        <span
          className={classNames(
            'text',
            'text_type_main-default',
            'text_color_inactive',
            styles.tip
          )}
        >
          В этом разделе вы можете изменить свои персональные данные
        </span>
      </div>

      <div className={styles.section}>
        <Outlet />
      </div>
    </div>
  );
}

export { Profile };
