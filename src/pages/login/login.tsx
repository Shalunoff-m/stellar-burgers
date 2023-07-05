import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { tryRelogin, userLogin } from '../../store/actions/user';
import { useForm } from '../../hooks/use-form';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';

function Login() {
  const { isAuthentificated } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const location = useLocation();
  const [buttonText, setButtonText] = useState('Войти');
  const navigate = useNavigate();
  const { formData, onChange, setFormData, onSubmit } = useForm(
    {
      userEmail: '',
      password: '',
    },
    () => {
      setButtonText('Отправляем данные...');
      dispatch(userLogin(formData, successCb, errorCb));
    }
  );

  useEffect(() => {
    dispatch(tryRelogin());
  }, [dispatch]);

  const successCb = () => {
    setButtonText('Вход выполнен!');
  };

  const errorCb = () => {
    setButtonText('Вход не выполнен');
    setFormData({ userEmail: '', password: '' });
    setButtonText('Войти');
    navigate('/login', { replace: true });
  };

  if (isAuthentificated)
    return <Navigate to={`${location?.state?.from || '/'}`} replace />;

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
          {buttonText}
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