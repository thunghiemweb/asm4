import { configureStore } from "@reduxjs/toolkit";


import nhanVienSlice from '../features/NhanVien/NhanVienSlice';
import PhongBanSlice from '../features/PhongBan/PhongBanSlice';
import BangLuongSlice from '../features/BangLuong/BangLuongSlice';

export const store = configureStore({
    reducer: {
        NhanVien: nhanVienSlice,
        PhongBan: PhongBanSlice,
        BangLuong: BangLuongSlice,


    },

});


