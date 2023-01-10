import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import { api } from "./components/utils/data";

function App() {
  return (
    <>
      <AppHeader />
      <main className={`layout`}>
        <section>
          <BurgerConstructor apiData={api} />
        </section>
        <section>
          <BurgerIngredients />
        </section>
      </main>
    </>
  );
}

export default App;
