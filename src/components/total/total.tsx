import './total.module.css';
import style from './total.module.css';
import currencyIcon from '../../images/currency 36x36.svg';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { sendDataApi } from '../../store/actions/order-detail';
import { useLocation, useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useSelector, useDispatch } from '../../hooks/use-custom-redux';
import { IConstructorIngredient, IIngredient } from '../../store/types';
import { TConstructorState } from '../../store/reducers/constructor';

interface ITotalProps {
  dataForCalc: IDataForCalc;
}

interface IDataForCalc {
  bun: IIngredient;
  ingredients: Array<IConstructorIngredient>;
}

const Total: FC<ITotalProps> = ({ dataForCalc }) => {
  const navigate = useNavigate();
  const { bun, ingredients } = dataForCalc;
  const dispatch = useDispatch();
  const data = useSelector((store) => store.constructorOrder);
  const { loading } = useSelector((store) => store.order);
  const location = useLocation();

  // Подсчет общей стоимости на основании булки и компонентов
  function calculateTotal({ bun, ingredients }: IDataForCalc) {
    let totalCoast = ingredients.reduce(
      (acc: number, item: IConstructorIngredient) => {
        return acc + item.price;
      },
      0
    );
    return totalCoast + bun.price * 2;
  }

  // Подсчет итоговой стоимости
  const totalPrice = calculateTotal({ bun, ingredients });

  // Проверка на наличие данных для отображения
  const isShow = !Number.isNaN(totalPrice);
  let canOrder = bun.price !== 0 && ingredients.length > 0 ? true : false;

  // Формирование списка для отправки по АПИ
  const packSendData = (data: TConstructorState) => {
    const list = data.ingredients.map((item: IConstructorIngredient) => {
      return item._id;
    });
    list.splice(0, 0, data.bun._id);
    return list;
  };

  // Отправка данных на сервер
  const sendOrder = (e: React.SyntheticEvent) => {
    dispatch(
      sendDataApi(packSendData(data), () => {
        navigate('/order', {
          state: { background: location },
        });
      })
    );
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
};

export default Total;
