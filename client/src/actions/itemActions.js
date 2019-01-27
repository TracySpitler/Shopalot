import {  GET_ITEMS, ADD_ITEM, DELETE_ITEM } from './types';

export const getItems = () => {
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
