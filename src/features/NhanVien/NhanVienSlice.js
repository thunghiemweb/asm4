import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const layDSNV = createAsyncThunk(
    //action type string
    'posts/getPosts',
    // callback function
    async (thunkAPI) => {
        const res = await fetch('http://localhost:3001/staffs.json').then(
            (data) => data.json()
        )
        return res
    })



function TimText(a, b) {
    if (b.name.toLowerCase().search(a.toLowerCase()) !== -1)
        return b;
}

const nhanVienSlice = createSlice({
    name: 'dsnv',
    initialState: {
        dsnvgoc: [],
        dsnv: [],
        nv: {},
        loading: '',
    },

    reducers: {
        TimKiem: (state, action) => {
            state.dsnv = state.dsnvgoc.filter((e) => TimText(action.payload, e));
        },

        TroLai: (state) => {
            state.dsnv = state.dsnvgoc;
        },

        ChonNV: (state, action) => {
            state.nv = action.payload;
        },

    },

    extraReducers: {
        [layDSNV.pending]: (state, action) => {
            state.loading = 'pending';
        },
        [layDSNV.fulfilled]: (state, action) => {
            state.dsnv = action.payload;
            state.dsnvgoc = action.payload;
            state.loading = 'fulfilled';
        },
        [layDSNV.rejected]: (state, action) => {
            state.loading = 'rejected';
        },
    }

});

export const { TimKiem } = nhanVienSlice.actions;
export const { TroLai } = nhanVienSlice.actions;
export const { ChonNV } = nhanVienSlice.actions;


export default nhanVienSlice.reducer;