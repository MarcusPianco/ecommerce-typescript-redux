import { CartActionTypes, ICartState } from './types';

const initialState: ICartState = { products: [] };

export default function cart(
    state = initialState,
    action: CartActionTypes
): ICartState {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                products: [...state.products, action.payload],
            };
        default:
            return state;
    }
}
