import { ADD_TO_CART, CartActionTypes } from './types';

import { IProduct } from '../../../types';

export function addProductToCart(newProduct: IProduct): CartActionTypes {
    return {
        type: ADD_TO_CART,
        payload: newProduct,
    };
}
