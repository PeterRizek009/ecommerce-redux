import { configureStore } from '@reduxjs/toolkit';
import  data  from './dataSlice';
import  auth  from './authSlice';
import  cart  from './cartSlice';
import  darkmode  from './darkModeSlice';


//2- create store and pass the reducer to it 
const store = configureStore({
  reducer:
  {
    data,
    auth,
    cart,
    darkmode,
  }
});



export default store;