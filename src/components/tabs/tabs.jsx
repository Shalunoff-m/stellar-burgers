import React from 'react';
import styles from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Tabs(props) {
  const [current, setCurrent] = React.useState('one');
  const { dom } = props;
  const { bunHeader, sauceHeader, mainHeader } = dom;

  return (
    <>
      <div className={`${styles.tabGroup} pb-10`}>
        <Tab
          value='bun'
          active={current === 'bun'}
          onClick={() => {
            bunHeader.current.scrollIntoView({ behavior: 'smooth' });

            setCurrent('bun');
          }}
        >
          Булки
        </Tab>
        <Tab
          value='sauce'
          active={current === 'sauce'}
          onClick={() => {
            sauceHeader.current.scrollIntoView({ behavior: 'smooth' });

            setCurrent('sauce');
          }}
        >
          Соусы
        </Tab>
        <Tab
          value='main'
          active={current === 'main'}
          onClick={() => {
            mainHeader.current.scrollIntoView({ behavior: 'smooth' });
            setCurrent('main');
          }}
        >
          Начинки
        </Tab>
      </div>
    </>
  );
}
