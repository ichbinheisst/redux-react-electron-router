import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import data from './reducers/data';
const reducer = combineReducers ({data});
const middleware = [...getDefaultMiddleware ()];

export const store = configureStore ({reducer, middleware});
