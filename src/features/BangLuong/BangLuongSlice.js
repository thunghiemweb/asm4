import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const layBangLuong = createAsyncThunk(
    //action type string
    'posts/getPosts',
    // callback function
    async (thunkAPI) => {
        const res = await fetch('http://localhost:3001/staffsSalary.json').then(
            (data) => data.json()
        )
        return res
    })


const BangLuongSlice = createSlice({
    name: 'BangLuong',
    initialState: {
        BangLuong: [],
        loading: '',
    },

    reducers: {

    },

    extraReducers: {
        [layBangLuong.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [layBangLuong.fulfilled]: (state, action) => {
            state.BangLuong = action.payload;
            state.loading = 'fulfilled';
        },
        [layBangLuong.rejected]: (state, action) => {
            state.loading = 'rejected';
        },
    }

});


export default BangLuongSlice.reducer;