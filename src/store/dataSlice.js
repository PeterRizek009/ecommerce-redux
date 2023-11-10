import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

// const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list';
// const options = {
//     method: 'GET',
//     params: {
//         country: 'us',
//         lang: 'en',
//         currentpage: '0',
//         pagesize: '30',
//         categories: 'men_all',
//         concepts: 'H&M MAN'
//     },
//     headers: {
//         'X-RapidAPI-Key': '0e5660c98cmsh9f555e84237a53ap1f1955jsn541171891663',
//         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//     }
// }





// const getData = useCallback(async () => {
//   await axios.request(
//     {
//       method: 'GET',
//       url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list',
//       params: {
//         country: 'us',
//         lang: 'en',
//         currentpage: '0',
//         pagesize: '30',
//         categories: 'men_all',
//         concepts: 'H&M MAN'
//       },
//       headers: {
//         'X-RapidAPI-Key': '8706630ab5mshf3e9e2dba093881p114d78jsn3b69bb0ba508',
//         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
//       }
//     })
//     .then(response => {
//       setData(response.data.results);
//     }).catch(error => console.log(error))
// }, [])




export const getData = createAsyncThunk('data/getData', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios('https://my-json-server.typicode.com/PeterRizek009/fakeAPI/db');
        const data = await response.data;
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }

})

export const insertData = createAsyncThunk('data/insertData', async (newData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch('https://my-json-server.typicode.com/PeterRizek009/fakeAPI/db', {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                "content-type": "application/json charset=UTF=8"
            }
        }
        )
        const data = await res.json();
        return data;

    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const deleteItem = createAsyncThunk('data/deleteItem', async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await fetch(`https://my-json-server.typicode.com/PeterRizek009/fakeAPI/db/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json charset=UTF=8"
            }
        }
        )
        console.log(res);

    } catch (error) {
        return rejectWithValue(error.message);
    }
})





const dataSlice = createSlice({
    name: 'data',
    initialState: {
        clothes: null,
        loading: false,
        error: null
    },
    extraReducers: {
        //getData
        [getData.pending]: (state, action) => {
            state.loading = true
            state.error = null;
        },
        [getData.fulfilled]: (state, action) => {
            state.clothes = action.payload.results;
            state.loading = false

        },
        [getData.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload

        },

        //insertData
        [insertData.pending]: (state, action) => {
            state.loading = true
            state.error = null;
        },
        [insertData.fulfilled]: (state, action) => {
            state.loading = false
            state.clothes.push(action.payload);
            // console.log(action.payload);
        },
        [insertData.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        //delete data
        [deleteItem.pending]: (state, action) => {
            state.loading = true
            state.error = null;
        },
        [deleteItem.fulfilled]: (state, action) => {
            state.loading = false
            console.log(state.clothes);
        },
        [deleteItem.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
});

export default dataSlice.reducer;
export const { addToCart } = dataSlice.actions;

