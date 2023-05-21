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
  const [formData, setFormData] = React.useState({
    userEmail: '',
    password: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      <form name='auth-data' className={styles.form} onSubmit={onSubmit}>
        <Input
          // className='m-6'
          type={'text'}
          placeholder={'E-mail'}
          onChange={onChange}
          // icon={'CurrencyIcon'}
          value={formData.userEmail}
          name={'userEmail'}
          error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
        />
        <PasswordInput
          onChange={onChange}
          value={formData.password}
          name={'password'}
          extraClass='mb-6'
          icon='ShowIcon'
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          extraClass='mb-20'
        >
          Войти
        </Button>
      </form>
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
