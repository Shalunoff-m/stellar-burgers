// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './ingredient.module.css';
import { api } from '../../utils/data';

function Ingredient() {
  const showData = api[7];
  console.log(showData);

  return (
    <div>Страница компонента</div>
    // <div className={styles.box}>
    //   <h2 className={`$text text_type_main-large pt-6 pb-2 ${styles.heading}`}>
    //     Детали ингредиента
    //   </h2>
    //   <img src={showData.image_large} alt={showData.name} />
    //   <h3 className='text text_type_main-medium pt-5'>{showData.name}</h3>
    //   <div className={`${styles.container} pt-8 pb-5`}>
    //     <div className={`${styles.cell} text_color_inactive`}>
    //       <p className={styles.description}>Калории, ккал</p>
    //       <p className='text text_type_digits-default pt-2'>
    //         {showData.calories}
    //       </p>
    //     </div>
    //     <div className={`${styles.cell} text_color_inactive`}>
    //       <p className={`${styles.description} text text_type_main-default`}>
    //         Белки, г
    //       </p>
    //       <p className='text text_type_digits-default pt-2'>
    //         {showData.proteins}
    //       </p>
    //     </div>
    //     <div className={`${styles.cell} text_color_inactive`}>
    //       <p className={`${styles.description} `}>Жиры, г</p>
    //       <p className='text text_type_digits-default pt-2'>{showData.fat}</p>
    //     </div>
    //     <div className={`${styles.cell} text_color_inactive`}>
    //       <p className={`${styles.description} `}>Углеводы, г</p>
    //       <p className='text text_type_digits-default pt-2'>
    //         {showData.carbohydrates}
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export { Ingredient };
