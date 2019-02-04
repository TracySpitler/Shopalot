import axios from 'axios';
import {  GET_STRIPE, PURCHASE_CART, IS_LOADING } from './types';

// action to GET_STRIPE_ACCOUNT from the server
export const getStripe = () => dispatch => {
  dispatch(setIsLoading());
  axios
    .post('/api/stripe/account/get')
    .then(res =>
      dispatch({
        type: GET_STRIPE,
        // send all items
        payload: res.data
      })
    );
};

// action to GET_STRIPE_ACCOUNT from the server
export const purchaseCart = (cart) => dispatch => {
  dispatch(setIsLoading());
  axios
    .post('/api/stripe/account/purchase', cart)
    .then(res =>
      dispatch({
        type: PURCHASE_CART,
        // send all items
        payload: res.data
      })
    );
};

// action to set the IS_LOADING state
export const setIsLoading = () => {
  return {
    type: IS_LOADING,
  };
};
