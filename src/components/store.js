import { configureStore } from '@reduxjs/toolkit'
import { itemsReducer, editingItemReducer } from './reducers';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  items: itemsReducer,
  editingItem: editingItemReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
