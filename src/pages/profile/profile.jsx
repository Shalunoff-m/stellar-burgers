// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React, { useEffect, useState } from 'react';
import styles from './profile.module.css';
import classNames from 'classnames';
import {
  Input,
  Button,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout, userUpdate } from '../../store/actions/user';
import { ProfileLink } from '../../components/profile-link/profile-link';

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState('Сохранить');
  const { userName: name, userEmail: email } = useSelector(
    (store) => store.user
  );
  const [formData, setFormData] = React.useState({
    userName: '',
    userEmail: '',
    password: '',
  });

  useEffect(() => {
    setFormData({
      userName: name,
      userEmail: email,
      password: '',
    });
  }, [name, email]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const exitHandler = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    navigate('/login');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setButtonText('Сохраняем данные');
    dispatch(
      userUpdate(
        formData,
        () => {
          setButtonText('Данные сохранены');
          setTimeout(() => {
            setButtonText('Сохранить');
          }, 5000);
        },
        () => {
          setButtonText('Не удалось');
          setTimeout(() => {
            setButtonText('Сохранить');
          }, 5000);
        }
      )
    );
    // console.log('Был клик по кнопке');
  };

  return (
    <div className={classNames(styles.box)}>
      <div className={classNames(styles.section, 'pr-15')}>
        <nav className={classNames(styles.nav, 'pb-20')}>
          <ProfileLink to='/profile'>Профиль</ProfileLink>
          <ProfileLink to='/history'>История заказов</ProfileLink>
          <ProfileLink to='/' onClick={exitHandler}>
            Выход
          </ProfileLink>
        </nav>
        <span
          className={classNames(
            'text',
            'text_type_main-default',
            'text_color_inactive',
            styles.tip
          )}
        >
          В этом разделе вы можете изменить свои персональные данные
        </span>
      </div>

      <div className={styles.section}>
        <form className={styles.form} name='userData' onSubmit={submitHandler}>
          <Input
            // className='m-6'
            type={'text'}
            placeholder={'Имя:'}
            onChange={onChange}
            icon='EditIcon'
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
            type={'text'}
            placeholder={'Логин:'}
            onChange={onChange}
            icon='EditIcon'
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
            placeholder={'Пароль:'}
            name={'password'}
            icon='EditIcon'
          />
          <Button
            htmlType='submit'
            type='primary'
            size='medium'
            extraClass='mt-10'
          >
            {buttonText}
          </Button>
        </form>
      </div>
    </div>
  );
}

export { Profile };
