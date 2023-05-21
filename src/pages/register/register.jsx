// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './register.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';

function Register() {
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
        Регистрация
      </p>
      <Input
        // className='m-6'
        type={'text'}
        placeholder={'Имя'}
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
        Зарегистрироваться
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
          Уже зарегистрированы?
        </span>
        <a
          href='/login'
          className={classNames('text', 'text_type_main-default', styles.link)}
        >
          Войти
        </a>
      </p>
    </div>
  );
}

export { Register };
