import React, { useEffect, useState, FC } from 'react';
import styles from './ingredient-details.module.css';
// import { useDispatch, useSelector } from 'react-redux';
import { NavigateOptions, useNavigate, useParams } from 'react-router-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import classNames from 'classnames';
import { useSelector } from '../../hooks/use-custom-redux';
import { IIngredient } from '../../store/types';

export const IngredientDetails: FC = () => {
  const components = useSelector((store) => store.ingredients);
  const { id } = useParams();
  const [showData, setShowData] = useState<IIngredient | null>(null);

  const navigate = useNavigate();

  function findIngredient(id: string) {
    const element =
      id && components.data && components.data.find((item) => item._id === id);
    return element;
  }

  useEffect(() => {
    if (components.data) {
      const searchElement = findIngredient(id!);
      if (searchElement) setShowData(searchElement);
    }
  }, [components]);

  return (
    // <div>Компонент деталей</div>
    showData && (
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
                navigate(-1);
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
    )
  );
};

export default IngredientDetails;
