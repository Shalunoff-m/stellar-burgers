import React from 'react';
import styles from './image-list.module.css';
import { useSelector } from 'react-redux';
import { getElement } from '../../utils/utils';
import { v4 as uuidv4 } from 'uuid';

function ImageList({ images }) {
  const { data } = useSelector((store) => store.ingredients);

  return (
    <>
      {images.map((image) => (
        <li key={uuidv4()} className={styles.imgContainer}>
          <img
            className={styles.imgIngredient}
            src={getElement({ id: image, data }).image}
            alt=''
          />
        </li>
      ))}
    </>
  );
}

export { ImageList };
/* 
imgContainer
imgIngredient  
*/
