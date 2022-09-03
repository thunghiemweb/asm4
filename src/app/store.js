import { configureStore } from "@reduxjs/toolkit";


import nhanVienSlice from '../features/NhanVien/NhanVienSlice';
import PhongBanSlice from '../features/PhongBan/PhongBanSlice';


export const store = configureStore({
    reducer: {
        NhanVien: nhanVienSlice,
        PhongBan: PhongBanSlice,


    },

});


