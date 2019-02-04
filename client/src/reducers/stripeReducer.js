import {  GET_STRIPE, PURCHASE_CART, IS_LOADING } from '../actions/types';

const initialState = {
  stripe: {},
  loading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STRIPE:
      return {
        ...state,
        stripe: action.payload,
        loaded: false
      };
    case PURCHASE_CART:
      return {
        ...state,
        stripe: action.payload
      };
    case IS_LOADING:
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
}
