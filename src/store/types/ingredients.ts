export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface IProductTypes {
  bun: string;
  sauce: string;
  main: string;
}

export interface TSortedData {
  [name: string]: Array<IIngredient>;
}

export interface ICalcIngredients extends IIngredient {
  count?: number;
}

export interface IProductTypes {
  bun: string;
  sauce: string;
  main: string;
}
