import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// Загрузка страниц
import { LayoutPage } from '../../pages/layout-page/layout-page';
import { MainPage } from '../../pages/main-page/main-page';
import { Login } from '../../pages/login/login';
import { Register } from '../../pages/register/register';
import { ForgotPassword } from '../../pages/forgot-password/forgot-password';
import { ResetPassword } from '../../pages/reset-password/reset-password';
import { Ingredient } from '../../pages/ingredient/ingredient';
import { Profile } from '../../pages/profile/profile';
import { OrderFeed } from '../../pages/order-feed/order-feed';
import { OrderHistory } from '../../pages/order-history/order-history';
import { OrderInfo } from '../../pages/order-info/order-info';
import { NotFound } from '../../pages/not-found/not-found';
import { useDispatch, useSelector } from 'react-redux';
import { tryRelogin } from '../../store/actions/user';
import { checkTokens } from '../../utils/api';
import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';
import { ProfileEdit } from '../../pages/profile-edit/profile-edit';
import ModalOverlay from '../modal-overlay/modal-overlay';
import IngredientDetails from '../ingredient-details/ingredient-details';

function App() {
  const dispatch = useDispatch();
  const { isAuthentificated } = useSelector((store) => store.user);
  let location = useLocation();
  // let state = location.state as { backgroundLocation?: Location };
  let background = location.state && location.state.background;
  // console.log(background.pathname);

  useEffect(() => {
    // Попытка повторной авторизации,
    // если сохранился refreshToken
    dispatch(tryRelogin());
    if (isAuthentificated) {
      setInterval(checkTokens, 60000);
    }
    return () => {
      clearInterval(checkTokens);
    };
  }, [isAuthentificated, dispatch]);

  return (
    <div>
      <Routes location={background || location}>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<MainPage />} />
          <Route path='/ingredients/:id' element={<Ingredient />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='reset' element={<ResetPassword />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route
            path='profile'
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route
              index
              element={<ProtectedRouteElement element={<ProfileEdit />} />}
            />
            <Route
              path='orders'
              exact={true}
              element={<ProtectedRouteElement element={<OrderHistory />} />}
            />
            <Route
              path='orders/:id'
              element={<ProtectedRouteElement element={<OrderInfo />} />}
            />
          </Route>
          <Route path='order-feed' element={<OrderFeed />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route
            path='/ingredients/:id'
            element={<ModalOverlay children={<IngredientDetails />} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
