import { configureStore } from '@reduxjs/toolkit';
import  data  from './dataSlice';
import  auth  from './authSlice';




//2- create store and pass the reducer to it 
const store = configureStore({
  reducer:
  {
    data,
    auth
  }
});



export default store;