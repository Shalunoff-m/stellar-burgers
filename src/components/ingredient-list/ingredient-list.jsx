import React from "react";
import styles from "./ingredient-list.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export default function IngredientList(props) {
  const { listHeader } = props;

  IngredientList.propTypes = {
    listHeader: PropTypes.string,
  };

  return (
    <>
      <h2 className="pt-1 pb-5 text text_type_main-medium">{listHeader}</h2>
      <ul className={`pt-6 pr-4 pl-4 pb-10 ${styles.ingredientList}`}>
        {props.children}
      </ul>
    </>
  );
}
