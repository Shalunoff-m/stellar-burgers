import React, { useEffect, useState } from 'react';
import styles from './reset-password.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
import { passwordReset } from '../../store/actions/user';
import { useForm } from '../../hooks/use-form';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';

const ResetPassword = () => {
  const { isAuthentificated } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [buttonText, setButtonText] = useState('Войти');
  const { formData, onChange, setFormData, onSubmit } = useForm(
    {
      password: '',
      code: '',
    },
    () => {
      setButtonText('Отправляем данные...');
      dispatch(passwordReset(formData, successCb, errorCb));
    }
  );

  const isSuccess = state ? state.success : false;

  useEffect(() => {}, [isSuccess]);

  const successCb = () => {
    setButtonText('Пароль сохранен!');
    navigate('/login');
  };

  const errorCb = () => {
    console.log('error');
    setButtonText('Сохранить не удалось...');
    setButtonText('Сохранить');
  };

  if (isAuthentificated) return <Navigate to={'/'} replace />;
  if (!isSuccess) return <Navigate to='/forgot-password' />;

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

      <form name='reset-password' onSubmit={onSubmit} className={styles.form}>
        <PasswordInput
          onChange={onChange}
          placeholder={'Введите новый пароль'}
          value={formData.password}
          name={'password'}
          extraClass='mb-6'
          icon='ShowIcon'
        />
        <Input
          // className='m-6'
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={onChange}
          // icon={'CurrencyIcon'}
          value={formData.code}
          name={'code'}
          error={false}
          // ref={inputRef}
          // onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mb-6'
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
};

export { ResetPassword };