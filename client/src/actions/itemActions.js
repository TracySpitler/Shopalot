import axios from 'axios';
import {  GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    // send the id
    payload: id
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    // send the item
    payload: item
  };
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
