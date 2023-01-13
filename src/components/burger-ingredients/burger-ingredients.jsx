import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients(props) {
  return (
    <section className={`pt-25 ${styles.wrapper}`}>{props.children}</section>
  );
}
