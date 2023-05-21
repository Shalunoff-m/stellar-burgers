// Содержимое файла component.jsx.hbs
// pascalCase и kebabCase - модификаторы регистров
import React from 'react';
import styles from './not-found.module.css';
import classNames from 'classnames';

function NotFound() {
  return (
    <div className={classNames(styles.wrapper)}>
      <p
        className={classNames(
          'text',
          'text_type_main-large',
          'pb-10',
          styles.questionText
        )}
      >
        К сожалению, вы ошиблись дверью ⛔
      </p>
      <p className={classNames('text', 'text_type_main-medium', 'pb-2')}>
        Может быть вы искали что-то другое?
      </p>
      <a href='/' className='text text_type_main-default text_color_inactive'>
        Вернуться обратно
      </a>
    </div>
  );
}

export { NotFound };
