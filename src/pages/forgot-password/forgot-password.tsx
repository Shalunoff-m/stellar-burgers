import React, { useState, FC } from 'react';
import styles from './forgot-password.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { passwordForgot, passwordReset } from '../../store/actions/user';
import { useForm } from '../../hooks/use-form';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';

const ForgotPassword: FC = () => {
  // const [email, setEmail] = React.useState('');
  const { isAuthentificated } = useSelector((store) => store.user);
  const [buttonText, setButtonText] = useState('Восстановить');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { formData, onChange, setFormData, onSubmit } = useForm(
    {
      email: '',
    },
    () => {
      setButtonText('Отправляем данные...');
      dispatch(passwordForgot(formData, successCb, errorCb));
    }
  );

  const successCb = () => {
    // console.log('Успешно');
    setButtonText('Успешно');
    navigate('/reset', {
      replace: true,
      state: {
        success: true,
      },
    });
  };

  const errorCb = () => {
    console.log('Неудачно');
    setButtonText('Что-то не так');
    navigate('/forgot-password', {
      replace: true,
      state: {
        success: true,
      },
    });
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
        Восстановление пароля
      </p>
      <form className={styles.form} onSubmit={onSubmit} name='forgot-password'>
        <Input
          // className='m-6'
          type={'email'}
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
          value={formData.email}
        />
        <Button
          htmlType='submit'
          type='primary'
          size='medium'
          extraClass='mb-20'
          // onClick={}
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

export { ForgotPassword };
