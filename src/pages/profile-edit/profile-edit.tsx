import React, { useState, useEffect } from 'react';
import styles from './profile-edit.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { userGet, userLogout, userUpdate } from '../../store/actions/user';
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useForm } from '../../hooks/use-form';
import classNames from 'classnames';
import { useDispatch, useSelector } from '../../hooks/use-custom-redux';

const ProfileEdit = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('Сохранить');
  const [contolsVisible, setControlsVisible] = useState(false);
  const { userName: name, userEmail: email } = useSelector(
    (store) => store.user
  );

  const { formData, setFormData, onSubmit } = useForm(
    {
      userName: '',
      userEmail: '',
      password: '',
    },
    () => {
      setButtonText('Сохраняем данные');
      dispatch(
        userUpdate(
          formData,
          () => {
            setButtonText('Данные сохранены');
            setButtonText('Сохранить');
            setControlsVisible(false);
          },
          () => {
            setButtonText('Не удалось');
            setButtonText('Сохранить');
          }
        )
      );
    }
  );

  useEffect(() => {
    setFormData({
      userName: name,
      userEmail: email,
      password: '',
    });
  }, [name, email]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setControlsVisible(true);
  };

  const onReset = () => {
    setFormData({
      userName: name,
      userEmail: email,
      password: '',
    });
    setControlsVisible(false);
  };

  return (
    <form
      className={classNames(styles.form, 'pt-30')}
      name='userData'
      onSubmit={onSubmit}
    >
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
      {contolsVisible && (
        <div>
          <Button
            htmlType='submit'
            type='primary'
            size='medium'
            extraClass='mt-10 mr-5'
          >
            {buttonText}
          </Button>
          <Button
            htmlType='button'
            type='primary'
            size='medium'
            extraClass='mt-10'
            onClick={onReset}
          >
            Сбросить
          </Button>
        </div>
      )}
    </form>
  );
};

export { ProfileEdit };
