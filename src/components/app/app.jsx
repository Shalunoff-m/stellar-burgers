import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Загрузка страниц
import { LayoutPage } from '../../pages/layout-page/layout-page';
import { MainPage } from '../../pages/main-page/main-page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LayoutPage />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
