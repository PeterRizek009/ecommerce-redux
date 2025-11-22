import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkmode',
    initialState: {
        isDark: false,
    },

    reducers: {
        toggleDarkMode: (state) => {
            state.isDark = !state.isDark;
        }
    }
})

export default darkModeSlice.reducer;
export const { toggleDarkMode } = darkModeSlice.actions;
