import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const LayPhongBan = createAsyncThunk(
    //action type string
    'posts/getPosts',
    // callback function
    async (thunkAPI) => {
        const res = await fetch('http://localhost:3001/departments.json').then(
            (data) => data.json()
        )
        return res
    })


const PhongBanSlice = createSlice({
    name: 'PhongBan',

    initialState: {
        PhongBan: [],
        loading: '',
    },

    extraReducers: {
        [LayPhongBan.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [LayPhongBan.fulfilled]: (state, action) => {
            state.PhongBan = action.payload;
            state.loading = 'fulfilled';
        },
        [LayPhongBan.rejected]: (state, action) => {
            state.loading = 'rejected';
        },


    }
});

export default PhongBanSlice.reducer;