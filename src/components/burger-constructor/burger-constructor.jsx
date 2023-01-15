import React from "react";
import styles from "./burger-constructor.module.css";
import Heading from "../heading/heading";
import Tabs from "../tabs/tabs";
import Scroll from "../scroll/scroll";
import { sortData } from "../utils/utils";
import IngredientList from "../ingredient-list/ingredient-list";
import { productTypes } from "../utils/types";
import IngredientItems from "../ingredient-items/ingredient-items";
import IngredientItemConstructor from "../ingredient-item-constructor/ingredient-item-constructor";
import ModalOverlay from "../modal-overlay/modal-overlay";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { useState, useEffect } from "react";

export default function BurgerConstructor(props) {
  const { data } = props;
  const sortedData = sortData(data, productTypes);
  const [modalOptions, setModalOptions] = React.useState({
    visible: false,
    dataModal: {},
  });

  function showModal({ data, modal }) {
    // console.log(recieveData);
    setModalOptions({
      ...modalOptions,
      visible: true,
      modal: modal,
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
    <section className={`${styles.section} pt-10`}>
      <Heading>Соберите бургер</Heading>
      <Tabs />
      <Scroll>
        {Object.keys(sortedData).map((List, index) => {
          return (
            <IngredientList listHeader={productTypes[List]} key={index}>
              <IngredientItems
                data={sortedData[List]}
                Item={IngredientItemConstructor}
                onClick={showModal}
              />
            </IngredientList>
          );
        })}
        {modalOptions.visible && (
          <ModalOverlay onCLose={closeModal}>
            <IngredientDetails data={modalOptions.dataModal} />
          </ModalOverlay>
        )}
      </Scroll>
    </section>
  );
}
