import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

// GET DATA
export const getData = createAsyncThunk('data/getData', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const response = await axios.get('https://dummyjson.com/products');
        return response.data;   // returns { products: [...] }
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

// DELETE DATA
export const deleteItem = createAsyncThunk('data/deleteItem', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        await fetch(
            `https://my-json-server.typicode.com/PeterRizek009/fakeAPI/db/${id}`,
            {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json; charset=UTF-8"
                }
            }
        );
        return id; 
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const dataSlice = createSlice({
    name: 'data',
    initialState: {
        clothes: [],
        allClothes: [],  // important: copy of full data
        loading: false,
        error: null
    },

    extraReducers: {

        // Get Data
        [getData.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [getData.fulfilled]: (state, action) => {
            state.clothes = action.payload.products;
            state.allClothes = action.payload.products; // full backup
            state.loading = false;
        },
        [getData.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        // Delete Item
        [deleteItem.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [deleteItem.fulfilled]: (state, action) => {
            state.loading = false;
            state.clothes = state.clothes.filter(item => item.id !== action.payload);
            state.allClothes = state.allClothes.filter(item => item.id !== action.payload);
        },
        [deleteItem.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

    },

    reducers: {
        filterByPrice: (state, action) => {
            state.clothes = state.allClothes.filter(
                item => item.price >= action.payload
            );
        },

        filterBySearch: (state, action) => {
            if (action.payload.trim() === "") {
                state.clothes = state.allClothes;
            } else {
                state.clothes = state.allClothes.filter(item =>
                    item.title.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        }
    }
});

export default dataSlice.reducer;
export const { filterByPrice, filterBySearch } = dataSlice.actions;
