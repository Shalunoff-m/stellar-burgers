// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React, { useState } from 'react';
import styles from './login.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function Login() {
  const [value, setValue] = React.useState('password');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={classNames(styles.box)}>
      <p
        className={classNames(
          'text',
          'text_type_main-medium',
          styles.header,
          'pb-6'
        )}
      >
        Вход
      </p>
      <Input
        // className='m-6'
        type={'text'}
        placeholder={'E-mail'}
        // onChange={(e) => setValue(e.target.value)}
        // icon={'CurrencyIcon'}
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
        name={'password'}
        extraClass='mb-6'
        icon='ShowIcon'
      />
      <Button htmlType='button' type='primary' size='medium' extraClass='mb-20'>
        Войти
      </Button>
      <p className='p-4'>
        <span
          className={classNames(
            'text',
            'text_type_main-default',
            'text_color_inactive',
            'mr-2'
          )}
        >
          Вы новый пользователь?
        </span>
        <Link
          to='/register'
          className={classNames('text', 'text_type_main-default', styles.link)}
        >
          Зарегистрироваться
        </Link>
      </p>
      <p className='p-0'>
        <span
          className={classNames(
            'text',
            'text_type_main-default',
            'text_color_inactive',
            'mr-2'
          )}
        >
          Забыли пароль?
        </span>
        <Link
          to='/forgot-password'
          className={classNames('text', 'text_type_main-default', styles.link)}
        >
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}

export { Login };
