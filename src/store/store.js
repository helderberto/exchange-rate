import { createStore, combineReducers } from 'redux';
import { userReducer } from './user';
import { ratesReducer } from './rates';

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: ratesReducer,
  }),
);

// state.amount => state.rates.amount
// state.name => state.user.name
