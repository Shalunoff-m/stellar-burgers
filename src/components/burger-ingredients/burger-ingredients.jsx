import styles from "./burger-ingredients.module.css";
// import cratorBread from "../../images/crator-bread.png";
// import {
//   ConstructorElement,
//   DragIcon,
//   Button,
// } from "@ya.praktikum/react-developer-burger-ui-components";
// import currencyIcon from "./../../images/currency 36x36.svg";

export default function BurgerIngredients(props) {
  return (
    <section className={`pt-25 ${styles.wrapper} ${styles.show}`}>
      {props.children}
    </section>
    // {props.children}
    // <>
    //   <div className={burgerIngredientsStyle.wrapper}>
    //     <ul className={`pt-25 ${burgerIngredientsStyle.listStyle}`}>
    //       <li className={burgerIngredientsStyle.listItem}>
    //         <DragIcon type="primary" />
    //         <ConstructorElement
    //           type="top"
    //           isLocked={true}
    //           text="Краторная булка N-200i (верх)"
    //           price={200}
    //           thumbnail={cratorBread}
    //         />
    //       </li>
    //       <li className={burgerIngredientsStyle.listItem}>
    //         <DragIcon type="primary" />
    //         <ConstructorElement
    //           text="Краторная булка N-200i (верх)"
    //           price={50}
    //           thumbnail={cratorBread}
    //         />
    //       </li>
    //       <li className={burgerIngredientsStyle.listItem}>
    //         <DragIcon type="primary" />
    //         <ConstructorElement
    //           type="bottom"
    //           isLocked={true}
    //           text="Краторная булка N-200i (низ)"
    //           price={200}
    //           thumbnail={cratorBread}
    //         />
    //       </li>
    //     </ul>
    //     <div className={`${burgerIngredientsStyle.summary} pt-10 pr-4`}>
    //       <div className={burgerIngredientsStyle.total}>
    //         <p className="text text_type_digits-medium">610</p>
    //         <img src={currencyIcon} alt="Валюта" className="pl-2 pr-10" />
    //         <Button htmlType="button" type="primary" size="large">
    //           Оформить заказ
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
