import styles from './order-info.module.css';
import classNames from 'classnames';
import {
  CloseIcon,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function OrderInfo() {
  const { data } = useSelector((state) => state.ingredients);
  const navigate = useNavigate();

  const closeHandler = (e) => {
    e.nativeEvent.stopPropagation();
    navigate(-1);
    console.log('Был клик');
  };

  return (
    <>
      {data && (
        <div
          className={classNames(styles.wrapper)}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={classNames(styles.box)}>
            <div className={styles.orderItem}>
              <p
                className={classNames(
                  'text',
                  'text_type_digits-default',
                  'pb-10',
                  styles.orderNumber
                )}
              >
                #034535
              </p>
              <p className='text text_type_main-medium pb-3'>
                Death Star Starship Main бургер
              </p>
              <p
                className={classNames(
                  'text',
                  'text_type_main-small',
                  styles.status,
                  'pb-15'
                )}
              >
                Выполнен
              </p>
              <p className='text text_type_main-medium pb-6'>Состав:</p>
              <ul className={classNames(styles.ingredientsList, 'pr-6')}>
                <li className={styles.ingredienDetail}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </div>
                  <p className='text text_type_main-default'>
                    Флюоресцентная булка R2-D3
                  </p>
                  <div className={styles.countAndPrice}>
                    <p
                      className={classNames(
                        styles.sum,
                        'text',
                        'text_type_digits-default'
                      )}
                    >
                      2 <span className='text_type_main-small'>х</span> 480
                    </p>
                    <CurrencyIcon type='primary' />
                  </div>
                </li>
                <li className={styles.ingredienDetail}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </div>
                  <p className='text text_type_main-default'>
                    Флюоресцентная булка R2-D3
                  </p>
                  <div className={styles.countAndPrice}>
                    <p
                      className={classNames(
                        styles.sum,
                        'text',
                        'text_type_digits-default'
                      )}
                    >
                      2 <span className='text_type_main-small'>х</span> 480
                    </p>
                    <CurrencyIcon type='primary' />
                  </div>
                </li>
                <li className={styles.ingredienDetail}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </div>
                  <p className='text text_type_main-default'>
                    Флюоресцентная булка R2-D3
                  </p>
                  <div className={styles.countAndPrice}>
                    <p
                      className={classNames(
                        styles.sum,
                        'text',
                        'text_type_digits-default'
                      )}
                    >
                      2 <span className='text_type_main-small'>х</span> 480
                    </p>
                    <CurrencyIcon type='primary' />
                  </div>
                </li>
                <li className={styles.ingredienDetail}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </div>
                  <p className='text text_type_main-default'>
                    Флюоресцентная булка R2-D3
                  </p>
                  <div className={styles.countAndPrice}>
                    <p
                      className={classNames(
                        styles.sum,
                        'text',
                        'text_type_digits-default'
                      )}
                    >
                      2 <span className='text_type_main-small'>х</span> 480
                    </p>
                    <CurrencyIcon type='primary' />
                  </div>
                </li>
                <li className={styles.ingredienDetail}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </div>
                  <p className='text text_type_main-default'>
                    Флюоресцентная булка R2-D3
                  </p>
                  <div className={styles.countAndPrice}>
                    <p
                      className={classNames(
                        styles.sum,
                        'text',
                        'text_type_digits-default'
                      )}
                    >
                      2 <span className='text_type_main-small'>х</span> 480
                    </p>
                    <CurrencyIcon type='primary' />
                  </div>
                </li>
                <li className={styles.ingredienDetail}>
                  <div className={styles.imgContainer}>
                    <img
                      className={styles.imgIngredient}
                      src={data[0].image}
                      alt=''
                    />
                  </div>
                  <p className='text text_type_main-default'>
                    Флюоресцентная булка R2-D3
                  </p>
                  <div className={styles.countAndPrice}>
                    <p
                      className={classNames(
                        styles.sum,
                        'text',
                        'text_type_digits-default'
                      )}
                    >
                      2 <span className='text_type_main-small'>х</span> 480
                    </p>
                    <CurrencyIcon type='primary' />
                  </div>
                </li>
              </ul>
              <div className={styles.descriptionTotal}>
                <p className='text text_type_main-default text_color_inactive'>
                  Вчера, 13:50 i-GMT+3
                </p>
                <div className={styles.totalSum}>
                  <p
                    className={classNames(
                      styles.sum,
                      'text',
                      'text_type_digits-default'
                    )}
                  >
                    510
                  </p>
                  <CurrencyIcon type='primary' />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.closeIcon} onClick={closeHandler}>
            <CloseIcon type='primary' />
          </div>
        </div>
      )}
    </>
  );
}

export { OrderInfo };
