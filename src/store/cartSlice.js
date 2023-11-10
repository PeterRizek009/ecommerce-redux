import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
     name: 'cart',
     initialState: {
          cart: [],
     },
     reducers: {
          addToCart: (state, action) => {
               state.cart.push(action.payload);
          },
          deletFromCart: (state, action) => {
               state.cart.pop(action.payload);
          },
          increase: (state, action) => {
               return {
                    ...state,
                    cart: (state.cart).map((item) =>
                         item.code === action.payload ?
                              { ...item, count: (item.count + 1) }
                              :
                              item
                    )
               };


          },
          decrease: (state, action) => {
               return {
                    ...state, cart: (state.cart).map((item) =>
                         item.code === action.payload ?
                              { ...item, count: (item.count - 1) }
                              :
                              item
                    )
               }


          }
     }


});

export const { addToCart, deletFromCart, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer