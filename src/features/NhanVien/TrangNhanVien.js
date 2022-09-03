import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useRef } from 'react'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDSNV, TimKiem, TroLai, ChonNV } from './NhanVienSlice'


function TrangNhanVien() {
    // Lưu biến tham chiếu đến phần tử Dom
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    // Kết nối với dữ liệu từ redux store
    const { dsnv, loading } = useSelector((state) => state.NhanVien);

    // sẽ chạy lại Callback mỗi khi dispatch thay đổi
    useEffect(() => {

        dispatch(layDSNV());

    }, [dispatch])


    if (loading !== 'fulfilled') return <p>loading...</p>

    const HienThiListNhanVien = dsnv.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 ">
                <Card >
                    <Link to={'staffs/' + e.id} >
                        <Card.Img src={e.image}
                            onClick={() => dispatch(ChonNV(e))}
                        />
                    </Link>

                    <Card.Body>
                        <Card.Text>{e.name}</Card.Text>
                    </Card.Body>

                </Card>
            </div>
        );
    });






    return (

        <div className="TrangNhanVien">
            <h1>Nhân viên</h1>
            <div className='container'>


                {/* Tìm kiếm nhân viên */}
                <div style={{ margin: "10px" }}>

                    <input
                        style={{ margin: "10px" }}
                        type="text"
                        placeholder="Type..."
                        ref={inputRef}
                    />
                    <button
                        style={{ margin: "10px" }}
                        onClick={() => dispatch(TimKiem(inputRef.current.value))}
                    >
                        Tìm kiếm</button>
                    <button
                        style={{ margin: "10px" }}
                        onClick={() => dispatch(TroLai())}
                    >
                        Trở lại</button>

                    <Link to={'LinkTrangThemNhanVien/'} >
                        <button
                            style={{ margin: "10px" }}>
                            Thêm Nhân Viên
                        </button>
                    </Link>

                </div>


                {/* Hiển thị danh sách nhan vien */}

                <div className='row'>
                    {HienThiListNhanVien}
                </div>



            </div>
        </div>
    );

}

export default TrangNhanVien;
