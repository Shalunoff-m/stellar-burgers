import PropTypes from "prop-types";

interface IProductTypes {
  bun: string,
  sauce: string,
  main: string,
}

const productTypes: IProductTypes = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};

const ingredientType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});

export { productTypes, ingredientType };
