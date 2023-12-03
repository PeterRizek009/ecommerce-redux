import { createSlice } from "@reduxjs/toolkit";



const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState: false,

    reducers: {
        toggleDarkMode : (state ) => !state
          
        
    }

})

export default darkModeSlice.reducer;
export const  { toggleDarkMode } = darkModeSlice.actions;
