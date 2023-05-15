// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './forgot-password.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

function ForgotPassword() {
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
        Восстановление пароля
      </p>
      <Input
        // className='m-6'
        type={'text'}
        placeholder={'Укажите e-mail'}
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

      <Button htmlType='button' type='primary' size='medium' extraClass='mb-20'>
        Восстановить
      </Button>

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
        <a
          href=''
          className={classNames('text', 'text_type_main-default', styles.link)}
        >
          Войти
        </a>
      </p>
    </div>
  );
}

export { ForgotPassword };
