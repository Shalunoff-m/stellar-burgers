export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const add = () => ({ type: INCREMENT });
export const remove = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });
