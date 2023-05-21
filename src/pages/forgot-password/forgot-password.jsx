// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './forgot-password.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = React.useState('password');
  const onChange = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
        Восстановление пароля
      </p>
      <form className={styles.form} onSubmit={onSubmit} name='forgot-password'>
        <Input
          // className='m-6'
          type={'text'}
          placeholder={'Укажите e-mail'}
          onChange={onChange}
          // icon={'CurrencyIcon'}
          // value={value}
          name={'email'}
          error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
          value={email}
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          extraClass='mb-20'
          // onClick={}
        >
          Восстановить
        </Button>
      </form>

      <p className='p-0'>
        <span
          className={classNames(
            'text',
            'text_type_main-default',
            'text_color_inactive',
            'mr-2'
          )}
        >
          Вспомнили пароль?
        </span>
        <Link
          to='/login'
          className={classNames('text', 'text_type_main-default', styles.link)}
        >
          Войти
        </Link>
      </p>
    </div>
  );
}

export { ForgotPassword };
