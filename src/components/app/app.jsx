import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<OrderHistory />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
