import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import stripeReducer from './stripeReducer';

export default combineReducers({
  item: itemReducer,
  stripe: stripeReducer,
});
