import React, { useEffect, useState } from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';

export default function IngredientDetails() {
  const components = useSelector((store) => store.ingredients);
  const { id } = useParams();
  const [showData, setShowData] = useState({});

  const navigate = useNavigate();

  function findIngredient(id) {
    const element = components.data.find((item) => item._id === id);
    return element;
  }

  useEffect(() => {
    if (components.data) {
      const searchElement = findIngredient(id);
      setShowData(searchElement);
    }
  }, [components]);

  return (
    // <div>Компонент деталей</div>
    <div
      className={classNames(styles.wrapper)}
      onClick={(evt) => {
        evt.stopPropagation();
      }}
    >
      <div className={styles.headline}>
        <h2
          className={`$text text_type_main-large pt-5 pb-5 ${styles.heading}`}
        >
          Детали ингредиента
        </h2>
        <div className={styles.closeIcon}>
          <CloseIcon
            type='primary'
            onClick={() => {
              navigate(-1, { replace: true });
            }}
          />
        </div>
      </div>
      <img
        className={styles.image}
        src={showData.image_large}
        alt={showData.name}
      />
      <h3
        className={classNames(
          'text',
          'text_type_main-medium pt-5',
          styles.ingredientName
        )}
      >
        {showData.name}
      </h3>
      <div className={`${styles.container} pt-8 pb-5`}>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={styles.description}>Калории, ккал</p>
          <p className='text text_type_digits-default pt-2'>
            {showData.calories}
          </p>
        </div>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={`${styles.description} text text_type_main-default`}>
            Белки, г
          </p>
          <p className='text text_type_digits-default pt-2'>
            {showData.proteins}
          </p>
        </div>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={`${styles.description} `}>Жиры, г</p>
          <p className='text text_type_digits-default pt-2'>{showData.fat}</p>
        </div>
        <div className={`${styles.cell} text_color_inactive`}>
          <p className={`${styles.description} `}>Углеводы, г</p>
          <p className='text text_type_digits-default pt-2'>
            {showData.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

// IngredientDetails.propTypes = {
//   showData: PropTypes.shape({
//     calories: PropTypes.number,
//     carbohydrates: PropTypes.number,
//     fat: PropTypes.number,
//     image_large: PropTypes.string,
//     name: PropTypes.string,
//     proteins: PropTypes.number,
//   }).isRequired,
// };
