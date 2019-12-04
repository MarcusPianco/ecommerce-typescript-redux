import { combineReducers } from 'redux';
import ReturnType from 'typescript';
import cartReducer from './cart/reducer';

export const rootReducer = combineReducers({ cart: cartReducer });

export type RootState = ReturnType<typeof rootReducer>;
