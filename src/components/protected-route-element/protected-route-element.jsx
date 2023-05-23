import React, { useEffect } from 'react';
import styles from './protected-route-element.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { tryRelogin } from '../../store/actions/user';
import { Navigate } from 'react-router-dom';

function ProtectedRouteElement({ element }) {
  const dispatch = useDispatch();
  const { isAuthentificated } = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(tryRelogin());
    isAuthentificated
      ? console.log('Пользователь в системе')
      : console.log('Пользователь не в  системе');
  }, [isAuthentificated, dispatch]);

  // if (isAuthentificated) return element;
  // else return null;

  return isAuthentificated ? element : <Navigate to='/login' replace />;
}

export { ProtectedRouteElement };
