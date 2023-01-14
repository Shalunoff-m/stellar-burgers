import React from "react";
import styles from "./ingredient-details.module.css";

export default function IngredientDetails(props) {
  const { data } = props;
  console.log(data);
  // const dataModal = data[5];

  return (
    <>
      <h2 className={`$text text_type_main-large pt-6 pb-2 ${styles.heading}`}>
        Детали ингредиента
      </h2>
      <img src={data.image_large} alt={data.name} />
      <h3 className="text text_type_main-medium pt-5">{data.name}</h3>
      <div className={`${styles.container} pt-8 pb-5`}>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={styles.description}>Калории, ккал</p>
          <p className="text text_type_digits-default pt-2">{data.calories}</p>
        </div>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={`${styles.description} text text_type_main-default`}>
            Белки, г
          </p>
          <p className="text text_type_digits-default pt-2">{data.proteins}</p>
        </div>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={`${styles.description} `}>Жиры, г</p>
          <p className="text text_type_digits-default pt-2">{data.fat}</p>
        </div>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={`${styles.description} `}>Углеводы, г</p>
          <p className="text text_type_digits-default pt-2">
            {data.carbohydrates}
          </p>
        </div>
      </div>
    </>
  );
}
