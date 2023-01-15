import styles from "./burger-ingredients.module.css";
import Scroll from "../scroll/scroll";
import IngredientItems from "../ingredient-items/ingredient-items";
import IngredientItemIngredients from "../ingredient-item-ingredients/ingredient-item-ingredients";
import { useState, useEffect } from "react";
import React from "react";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import Total from "../total/total";
import PropTypes from "prop-types";
import { ingredientType } from "../utils/types";
import Bread from "../bread/bread";

export default function BurgerIngredients(props) {
  const { data, ingredients } = props;
  const [modalOptions, setModalOptions] = React.useState({
    visible: false,
    dataModal: {},
  });

  function onlyIngredients(data) {
    // console.log(data);
    const list = data.filter((item) => {
      return item.type !== "bun";
    });
    return list;
  }

  const dataWithoutBread = onlyIngredients(data);

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
      <Bread bread={ingredients.bread} type="top" />
      <Scroll type="ingredients">
        <IngredientItems
          data={dataWithoutBread}
          Item={IngredientItemIngredients}
        />
        {modalOptions.visible && (
          <Modal onClose={closeModal}>
            <OrderDetails data={modalOptions.dataModal} />
          </Modal>
        )}
      </Scroll>
      <Bread bread={ingredients.bread} type="bottom" />
      <Total clickHandler={showModal} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientType),
};
