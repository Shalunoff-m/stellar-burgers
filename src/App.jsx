import React from "react";
import "./App.css";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";
import utils from "./components/utils/utils.module.css";

function App() {
  return (
    <>
      <AppHeader />
      <main className={`${utils.show} layout`}>
        <section className="section">
          <BurgerConstructor />
        </section>
        <section className="section">
          <BurgerIngredients />
        </section>
      </main>
    </>
  );
}

export default App;
