import styles from './protected-route-element.module.css';
import { Navigate, useLocation } from 'react-router-dom';
import { FC, ReactElement, ReactNode } from 'react';
import { useSelector } from '../../hooks/use-custom-redux';

interface IProtectedRouteElementProps {
  element: ReactElement;
}

const ProtectedRouteElement: FC<IProtectedRouteElementProps> = ({
  element,
}) => {
  const location = useLocation();
  const { isAuthentificated } = useSelector((store) => store.user);
  // console.log(isAuthentificated);

  return isAuthentificated ? (
    element
  ) : (
    <Navigate to='/login' replace state={{ from: location.pathname }} />
  );
};

export { ProtectedRouteElement };
