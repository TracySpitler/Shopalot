import axios from 'axios';
import {  GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

// action to GET_ITEMS from the server
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios
    .get('/api/items')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        // send all items
        payload: res.data
      })
    );
};

// action to DELETE_ITEM from the server by _id
export const deleteItem = (id) => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
        // send the id
        payload: id
      })
    );
};

// action to ADD_ITEM to the server
export const addItem = (item) => dispatch => {
  axios
    .post('/api/items', item)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
        // send the added item
        payload: res.data
      })
    );
};

// action to set the ITEMS_LOADING state
export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
