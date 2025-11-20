import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;

            const exists = state.cart.find(p => p.id === item.id);

            if (!exists) {
                state.cart.push({ ...item, count: 1 }); // important
            } else {
                exists.count += 1;
            }
        },

        deletFromCart: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.filter(item => item.id !== id);
        },

        increase: (state, action) => {
            const id = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item) item.count += 1;
        },

        decrease: (state, action) => {
            const id = action.payload;
            const item = state.cart.find(item => item.id === id);
            if (item && item.count > 1) {
                item.count -= 1;
            }
        }
    }
});

export default cartSlice.reducer;
export const { addToCart, deletFromCart, increase, decrease } = cartSlice.actions;
