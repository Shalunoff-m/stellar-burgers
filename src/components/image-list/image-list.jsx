import React from 'react';
import styles from './image-list.module.css';
import { useSelector } from 'react-redux';
import { getElement } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

function ImageList({ images }) {
  const { data } = useSelector((store) => store.ingredients);

  return (
    <>
      {images.map((image, key) => {
        if (key < 6) {
          return (
            <li key={uuidv4()} className={styles.imgContainer}>
              <img
                className={styles.imgIngredient}
                src={getElement({ id: image, data }).image}
                alt=''
              />
            </li>
          );
        }
        if (key === 6) {
          return (
            <p
              key={uuidv4()}
              className={classNames(
                'text',
                'text_type_main-medium',
                'pt-3',
                'pl-8'
              )}
            >
              ...
            </p>
          );
        }
      })}
    </>
  );
}

export { ImageList };
/* 
imgContainer
imgIngredient  
*/
