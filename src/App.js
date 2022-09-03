import './App.css';

import React from 'react'

import { useState } from 'react';

import {
  Routes,
  Route,
} from "react-router-dom";


// di chuyển dòng này đến reducer.js
import { STAFFS } from "./shared/staffs"
import { DEPARTMENTS } from "./shared/staffs"

import HTThanhDieuHuong from "./trang/ThanhDieuHuong";
import HTTrangBangLuong from "./trang/TrangBangLuong";
import HTTrangNhanVien from "./features/NhanVien/TrangNhanVien";
import HTTrangPhongBan from "./features/PhongBan/TrangPhongBan";
import HTPhanChanTrang from "./trang/PhanChanTrang";
import HTTrangChiTietNV from "./trang/TrangChiTietNV";

import HTTrangThemNhanVien from "./trang/TrangThemNhanVien";

import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {

  const [listNV, setlistNV] = useState(STAFFS);



  return (
    <div className="App">

      {/* Phần đầu trang */}
      <HTThanhDieuHuong />

      {/* Phần thân trang */}
      <Routes>

        {/* Lấy dữ liệu từ trang nhân viên để gửi sang trang chi tiết nhân viên */}
        <Route path="/"
          element={<HTTrangNhanVien />}
        />

        {/* Nhận chi tiết nhân viên để hiển thị */}
        <Route path="staffs/*"
          element={<HTTrangChiTietNV />}
        />


        <Route path="LinkTrangThemNhanVien"
          element={
            <HTTrangThemNhanVien
              chucvu={DEPARTMENTS}
              dsnv={listNV}

              dsnvmoi={listNV => setlistNV(listNV)}
            />}
        />

        <Route path="LinkTrangPhongBan" element={<HTTrangPhongBan />} />

        <Route path="LinkTrangBangLuong" element={<HTTrangBangLuong dsnv={listNV} />} />


      </Routes>


      {/* Phần chân trang */}
      <HTPhanChanTrang />

    </div >
  );
}

export default App;
