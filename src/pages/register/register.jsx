import React, { useState } from 'react';
import styles from './register.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../store/actions/user';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/use-form';

function Register() {
  const navigate = useNavigate();
  const { isAuthentificated } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('Зарегистрироваться');
  const { formData, onChange, setFormData, onSubmit } = useForm(
    {
      userName: '',
      userEmail: '',
      password: '',
    },
    () => {
      setButtonText('Отправляем данные...');
      dispatch(userRegister(formData, successCb, errorCb));
    }
  );

  const successCb = () => {
    setButtonText('Успешно!');
    navigate('/login');
  };

  const errorCb = () => {
    setButtonText('Что-то не так ...');
    navigate('/register', { replace: true });
  };

  if (isAuthentificated) return <Navigate to={'/'} replace />;

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
      <form name='register' className={styles.form} onSubmit={onSubmit}>
        <Input
          // className='m-6'
          onChange={onChange}
          type={'text'}
          placeholder={'Имя'}
          // icon={'CurrencyIcon'}
          value={formData.userName}
          name={'userName'}
          error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
        />
        <Input
          // className='m-6'
          type={'email'}
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
          {buttonText}
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
          Уже зарегистрированы?
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

export { Register };
