import React, { useEffect } from 'react';
import styles from './reset-password.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { passwordReset } from '../../store/actions/user';

function ResetPassword() {
  const dispatch = useDispatch();
  const [formData, setformData] = React.useState({
    password: '',
    code: '',
  });
  const { state } = useLocation();
  const isSuccess = state ? state.success : false;

  useEffect(() => {
    // console.log(isSuccess);
  }, [isSuccess]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const successCb = () => {
      console.log('success');
    };
    const errorCb = () => {
      console.log('error');
    };

    dispatch(passwordReset(formData, successCb, errorCb));
  };

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
          Сохранить
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

export { ResetPassword };
