import styles from './loader.module.css';
import rocketLoader from '../../images/rocket.gif';

export const Loader = () => {
  return (
    <div className={styles.layout}>
      <img className={styles.img} src={rocketLoader} alt='Loader' />
    </div>
  );
};