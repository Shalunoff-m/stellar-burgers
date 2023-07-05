export interface IOrder {
  _id: string;
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
}

export type TOrderStatus = 'created' | 'pending' | 'done';
