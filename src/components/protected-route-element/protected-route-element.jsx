import styles from './protected-route-element.module.css';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRouteElement({ element }) {
  const location = useLocation();
  const { isAuthentificated } = useSelector((store) => store.user);
  // console.log(isAuthentificated);

  return isAuthentificated ? (
    element
  ) : (
    <Navigate to='/login' replace state={{ from: location.pathname }} />
  );
}

export { ProtectedRouteElement };
