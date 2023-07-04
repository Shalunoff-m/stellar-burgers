import PropTypes from 'prop-types';
import React, { useEffect, FC } from 'react';
import styles from './tabs.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

interface ITabsProps {
  dom: TDifferentRefDom;
}

type TDifferentRefDom = {
  [key: string]: { current: any };
};

const Tabs: FC<ITabsProps> = (props) => {
  const [current, setCurrent] = React.useState('one');
  const { dom } = props;
  const { bunHeader, sauceHeader, mainHeader, scrollContainer } = dom;

  useEffect(() => {
    const options = {
      root: scrollContainer.current,
      rootMargin: '0px 0px -90%',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrent(`${entry.target.id}`);
        }
      });
    }, options);

    if (bunHeader) observer.observe(bunHeader.current);
    if (sauceHeader) observer.observe(sauceHeader.current);
    if (mainHeader) observer.observe(mainHeader.current);
  });

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
};

export default Tabs;
