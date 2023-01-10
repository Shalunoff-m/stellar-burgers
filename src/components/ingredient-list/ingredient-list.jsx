import styles from "./ingredient-list.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import cratorBread from "../../images/crator-bread.png";
import { productTypes } from "../utils/types";
import { sortData } from "../utils/utils";

export default function IngredientList({ data }) {
  const sortedData = sortData(data, productTypes);
  //   console.log(sortedData);

  function renderItems(itemElements) {
    // console.log(itemElements);
    const elementsList = itemElements.map((element, i) => (
      <>
        <li key={i} className={`pb-10 ${styles.listItem}`}>
          <img src={element.image} alt={element.name} className="pt-0 pb-1" />
          <div className={styles.currency}>
            <p className="text text_type_digits-default">{element.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`text text_type_main-default ${styles.description}`}>
            {element.name}
          </p>
          {element.__v > 0 ? (
            <div className={styles.count}>
              <p className="text text_type_digits-default">{element.__v}</p>
            </div>
          ) : (
            ""
          )}
        </li>
      </>
    ));
    console.log(`element-list`, elementsList);
    return elementsList;
  }

  function renderData(sortedData) {
    const data = Object.keys(sortedData).map((ingredient, i) => (
      <>
        <h2 key={i} className="text text_type_main-medium">
          {productTypes[ingredient]}
        </h2>
        <ul className={`pt-6 pr-4 pl-4 pb-10 ${styles.ingredientList}`}>
          {renderItems(sortedData[ingredient])}
        </ul>
      </>
    ));
    // console.log(data);
    return data;
  }

  return <>{renderData(sortedData)}</>;
}
