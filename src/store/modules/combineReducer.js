import { combineReducers } from 'redux';

import authReducer from './auth/reducers';
import invoiceReducer from './invoice/reducers';
import usage from './usage/reducers';
const reducer = combineReducers({
  auth: authReducer,
  invoice: invoiceReducer,
  usage: usage,
});

export default reducer;
