import uuid from 'uuid';
import {  GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'MacBook Pro'},
    { id: uuid(), name: 'Samsung Wireless Charger'},
    { id: uuid(), name: 'iPhone X'},
    { id: uuid(), name: 'Samsung Galaxy S9'},
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        // filter out the item with the matching id
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    default:
      return state;
  }
}
