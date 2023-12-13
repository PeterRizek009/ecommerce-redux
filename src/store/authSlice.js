import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false, user: []
  },

  reducers: {
    logInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn
    },
    addNewUser: (state, action) => {
      state.user.push(action.payload);
    },
    checkSignIN: (state, action) => {
     return  (state.user)?.includes(action.payload.email)
     
    }

  }

})

export const { logInOut, addNewUser, checkSignIN } = authSlice.actions;
export default authSlice.reducer;


