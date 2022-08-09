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
import HTTrangNhanVien from "./trang/TrangNhanVien";
import HTTrangPhongBan from "./trang/TrangPhongBan";
import HTPhanChanTrang from "./trang/PhanChanTrang";
import HTTrangChiTietNV from "./trang/TrangChiTietNV";

import HTTrangThemNhanVien from "./trang/TrangThemNhanVien";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counter";


function App(props) {

  // useState nhận dữ liệu từ Child component 
  const [NhanVienDuocChon, setNhanVienDuocChon] = useState(null);

  const [listNV, setlistNV] = useState(STAFFS);

  // console.log(listNV);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">

      <div>
        <h1> The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>Tăng</button>
        <button onClick={() => dispatch(decrement())}>Giảm</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 33</button>
      </div>

      {/* Phần đầu trang */}
      <HTThanhDieuHuong />

      {/* Phần thân trang */}
      <Routes>

        {/* Lấy dữ liệu từ trang nhân viên để gửi sang trang chi tiết nhân viên */}
        <Route path="/"
          element={<HTTrangNhanVien dsnv={listNV} ChonNV={NhanVienDuocChon => setNhanVienDuocChon(NhanVienDuocChon)} />}
        />


        {/* Nhận chi tiết nhân viên để hiển thị */}
        <Route path="staffs/*" element={<HTTrangChiTietNV nv={NhanVienDuocChon} />} />


        <Route path="LinkTrangThemNhanVien"
          element={
            <HTTrangThemNhanVien
              chucvu={DEPARTMENTS}
              dsnv={listNV}

              dsnvmoi={listNV => setlistNV(listNV)}
            />}
        />

        <Route path="LinkTrangPhongBan" element={<HTTrangPhongBan chucvu={DEPARTMENTS} dsnv={STAFFS} />} />

        <Route path="LinkTrangBangLuong" element={<HTTrangBangLuong dsnv={listNV} />} />


      </Routes>


      {/* Phần chân trang */}
      <HTPhanChanTrang />

    </div >
  );
}

export default App;
