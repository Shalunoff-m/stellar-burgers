import PropTypes from 'prop-types';
import './total.module.css';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { sendDataApi } from '../../store/actions/order-detail';
import { ingredientType } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';

export default function Total({ dataForCalc }) {
  const { bun, ingredients } = dataForCalc;
  const dispatch = useDispatch();
  const data = useSelector((store) => store.constructor);
  const { loading } = useSelector((store) => store.order);

  // Подсчет общей стоимости на основании булки и компонентов
  function calculateTotal({ bun, ingredients }) {
    let totalCoast = ingredients.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return totalCoast + bun.price * 2;
  }

  // Подсчет итоговой стоимости
  const totalPrice = calculateTotal({ bun, ingredients });

  // Проверка на наличие данных для отображения
  const isShow = !Number.isNaN(totalPrice);
  let canOrder = bun.price !== 0 && ingredients.length > 0 ? true : false;

  // Формирование списка для отправки по АПИ
  const packSendData = (data) => {
    const list = data.ingredients.reduce(
      (acc, item) => {
        acc.push(item._id);
        return acc;
      },
      [data.bun ? data.bun._id : []]
    );
    return list;
  };

  // Отправка данных на сервер
  const sendOrder = (e) => {
    dispatch(sendDataApi(packSendData(data)));
  };

  return (
    <div className={`${style.summary} pt-10 pr-4`}>
      {isShow && (
        <div className={style.total}>
          <p className='text text_type_digits-medium'>{totalPrice}</p>
          {/* {totalPrice} */}
          <img src={currencyIcon} alt='Валюта' className='pl-2 pr-10' />
          <Button
            htmlType='button'
            type='primary'
            size='large'
            onClick={sendOrder}
            disabled={!canOrder ? true : false}
          >
            {loading ? 'Отправляем заказ...' : 'Оформить заказ'}
          </Button>
        </div>
      )}
    </div>
  );
}

Total.propTypes = {
  dataForCalc: PropTypes.shape({
    bun: PropTypes.object.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired,
  }),
};
