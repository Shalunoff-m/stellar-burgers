import styles from "./burger-ingredients.module.css";
import Scroll from "../scroll/scroll";
import IngredientItems from "../ingredient-items/ingredient-items";
import IngredientItemIngredients from "../ingredient-item-ingredients/ingredient-item-ingredients";
import { useState, useEffect } from "react";
import React from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";
import Total from "../total/total";

export default function BurgerIngredients(props) {
  const { data } = props;
  const [modalOptions, setModalOptions] = React.useState({
    visible: false,
    dataModal: {},
  });

  function showModal({ data }) {
    setModalOptions({
      ...modalOptions,
      visible: true,
      dataModal: {
        ...data,
      },
    });
  }

  function closeModal() {
    setModalOptions({
      ...modalOptions,
      visible: false,
    });
  }

  return (
    <section className={`pt-25 ${styles.wrapper}`}>
      <Scroll type="ingredients">
        <IngredientItems data={data} Item={IngredientItemIngredients} />
        {modalOptions.visible && (
          <ModalOverlay onCLose={closeModal}>
            <OrderDetails data={modalOptions.dataModal} />
          </ModalOverlay>
        )}
      </Scroll>
      <Total clickHandler={showModal} />
    </section>
  );
}
