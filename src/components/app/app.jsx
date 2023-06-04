import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
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
import { OrderInfo } from '../order-info/order-info';
import { NotFound } from '../../pages/not-found/not-found';
import { useDispatch, useSelector } from 'react-redux';
import { ProtectedRouteElement } from '../protected-route-element/protected-route-element';
import { ProfileEdit } from '../../pages/profile-edit/profile-edit';
import ModalOverlay from '../modal-overlay/modal-overlay';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';
import { loadFromApi } from '../../store/actions/ingredients';
import {
  FORGOT_PASSWORD,
  INDEX,
  INGREDIENTS_ID,
  LOGIN,
  ORDER,
  ORDERS,
  ORDERS_DETAIL,
  FEED,
  PAGE404,
  PROFILE,
  REGISTER,
  RESET,
  RESET_PASSWORD,
  FEED_DETAIL,
} from '../../pages/path';
import { OrderInfoPage } from '../../pages/order-info-page/order-info-page';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.ingredients);
  let location = useLocation();
  let background = location.state && location.state.background;

  useEffect(() => {
    if (!data) {
      dispatch(loadFromApi());
    }
  }, [dispatch]);

  return (
    <div>
      <Routes location={background || location}>
        <Route path={INDEX} element={<LayoutPage />}>
          {/* Главная страница */}
          <Route index element={<MainPage />} />
          <Route path={INGREDIENTS_ID} element={<Ingredient />} />

          {/* ------------------------------------- */}
          {/* Маршруты недоступные авторизованному пользователю */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
          <Route path={RESET} element={<ResetPassword />} />
          <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
          <Route path={RESET_PASSWORD} element={<ResetPassword />} />

          {/* ------------------------------------- */}
          {/* Защищенные маршруты */}
          <Route
            path={PROFILE}
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route
              index
              element={<ProtectedRouteElement element={<ProfileEdit />} />}
            />
            <Route
              path={ORDERS}
              // exact={true}
              element={<ProtectedRouteElement element={<OrderHistory />} />}
            />
          </Route>

          {/* Страница с деталями о заказе */}
          <Route
            path={ORDERS_DETAIL}
            element={<ProtectedRouteElement element={<OrderInfoPage />} />}
          />

          {/* ------------------------------------- */}
          {/* Прочие маршруты */}

          <Route path={FEED} element={<OrderFeed />} />
          <Route path={FEED_DETAIL} element={<OrderInfoPage />} />
          <Route path={PAGE404} element={<NotFound />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          {/* Модалка с деталями о ингридиенте */}
          <Route
            path={INGREDIENTS_ID}
            element={<ModalOverlay children={<IngredientDetails />} />}
          />

          {/* Модалка с деталями совершенного заказа */}
          <Route
            path={ORDER}
            element={<ModalOverlay children={<OrderDetails />} />}
          />

          {/* Модалка с деталями о заказе */}
          <Route
            path={FEED_DETAIL}
            element={<ModalOverlay children={<OrderInfo />} />}
          />
          {/* Модалка с деталями о заказе */}
          <Route
            path={ORDERS_DETAIL}
            element={<ModalOverlay children={<OrderInfo />} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
