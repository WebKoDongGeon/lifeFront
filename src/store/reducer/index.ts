import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const userPersistConfig = {
    key: 'root',
    storage: storage,
  };
  
const rootReducer = combineReducers({
    // user: userSlice
    user: persistReducer(userPersistConfig, userSlice),
});

  
export default rootReducer;