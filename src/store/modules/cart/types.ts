import { IProduct } from '../../../types';

export const ADD_TO_CART = 'ADD_TO_CART';

export interface ICartState {
    products: IProduct[];
}

interface AddToCartAction {
    type: typeof ADD_TO_CART;
    payload: IProduct;
}

export type CartActionTypes = AddToCartAction;
