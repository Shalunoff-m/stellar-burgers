import React, { useEffect } from 'react';
import styles from './protected-route-element.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { tryRelogin } from '../../store/actions/user';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({ element, type }) {
  const dispatch = useDispatch();
  const { isAuthentificated } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(tryRelogin());
  }, [isAuthentificated, dispatch, type]);

  // if (isAuthentificated) return element;
  // else return null;

  switch (type) {
    case 'online':
      // console.log('Пользователь НЕ авторизован, переадресация на авторизацию');

      return isAuthentificated ? element : <Navigate to='/login' replace />;
    case 'offline':
      // console.log('Пользователь авторизован, переадресация на главную');
      return isAuthentificated ? <Navigate to='/' replace /> : element;
    default:
      return <Navigate to='/' replace />;
  }
}

export { ProtectedRouteElement };
