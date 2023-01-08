import style from "./burger-constructor.module.css";
import {
  Tab,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import cratorBread from "../../images/crator-bread.png";

export default function BurgerConstructor(props) {
  const [current, setCurrent] = React.useState("one");
  return (
    <>
      <h1 className="pt-10 pb-5 text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="pb-10">
        <Tab value="bread" active={current === "bread"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="filling"
          active={current === "filling"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>

      <h2 className="text text_type_main-medium">Булки</h2>
      <ul className="pt-6 pr-4 pl-4 pb-10">
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
      </ul>
      <h2 className="text text_type_main-medium">Соусы</h2>
      <ul className="pt-6 pr-4 pl-4 pb-10">
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
        <li className="pb-10">
          <img src={cratorBread} alt="Краторная булка" className="pt-0 pb-1" />
          <div className={style.currency}>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${style.description}`}>
            Краторная булка N-200i
          </p>
        </li>
      </ul>
    </>
  );
}
