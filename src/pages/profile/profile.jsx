// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './profile.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../store/actions/user';

function Profile() {
  const [value, setValue] = React.useState('password');
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const dispatch = useDispatch();

  const exitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };

  return (
    <div className={classNames(styles.box)}>
      <div className={classNames(styles.section, 'pr-15')}>
        <nav className={classNames(styles.nav, 'pb-20')}>
          <Link
            className={classNames(
              'text',
              'text_type_main-medium',
              styles.link,
              'pt-4',
              'pb-4'
            )}
            to='/'
          >
            Профиль
          </Link>
          <Link
            className={classNames(
              'text',
              'text_type_main-medium',
              styles.link,
              'pt-4',
              'pb-4'
            )}
            to='/'
          >
            История заказов
          </Link>
          <Link
            className={classNames(
              'text',
              'text_type_main-medium',
              styles.link,
              'pt-4',
              'pb-4'
            )}
            to='/'
            onClick={exitHandler}
          >
            Выход
          </Link>
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
        <Input
          // className='m-6'
          type={'text'}
          placeholder={'Имя:'}
          // onChange={(e) => setValue(e.target.value)}
          icon='EditIcon'
          // value={value}
          name={'name'}
          error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
        />
        <Input
          // className='m-6'
          type={'text'}
          placeholder={'Логин:'}
          // onChange={(e) => setValue(e.target.value)}
          icon='EditIcon'
          // value={value}
          name={'name'}
          error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
        />
        <PasswordInput
          onChange={onChange}
          value={value}
          placeholder={'Пароль:'}
          name={'password'}
          icon='EditIcon'
        />
      </div>
    </div>
  );
}

export { Profile };
