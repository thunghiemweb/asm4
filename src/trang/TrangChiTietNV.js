import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import dateFormat from "dateformat";

import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import {
    useEffect,
    // useState, 
    useRef
} from 'react'

import { LayPhongBan } from '../features/PhongBan/PhongBanSlice'

const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

function TrangChiTietNV() {

    // Lấy danh sách nhân viên
    const nv = useSelector((state) => state.NhanVien.nv);

    const dispatch = useDispatch();

    const { PhongBan, loading } = useSelector((state) => state.PhongBan);

    // Lấy dữ liệu phòng ban khi lần đầu tiên render
    useEffect(() => {
        dispatch(LayPhongBan());
    }, [dispatch]);

    const ChucVuRef = useRef('...');

    // Chạy song song với 
    useEffect(() => {
        if (PhongBan.find(x => x.id === nv.departmentId) !== undefined) {
            ChucVuRef.current = PhongBan.find(x => x.id === nv.departmentId).name;
        }
    }, [PhongBan, nv]);

    if (loading === 'fulfilled') {
        return (
            <div className="TrangChiTietNV">

                <h1>Chi tiết nhân viên</h1>
                <div className='container' >

                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{nv.name}</BreadcrumbItem>
                    </Breadcrumb>

                    <div style={styles}>
                        <Card style={{ width: '18rem' }}>

                            <Card.Img src={nv.image} />

                            <Card.Body>

                                <Card.Title>{nv.name}</Card.Title>
                                <Card.Text style={{ textAlign: "left" }}>Ngày vào công ty: {dateFormat(nv.startDate, "dd/mm/yyyy")}</Card.Text>
                                <Card.Text style={{ textAlign: "left" }}>Phòng ban: {ChucVuRef.current}</Card.Text>
                                <Card.Text style={{ textAlign: "left" }}>Số ngày nghỉ còn lại: {nv.annualLeave} ngày</Card.Text>
                                <Card.Text style={{ textAlign: "left" }}>Số ngày đã làm thêm: {nv.overTime} ngày</Card.Text>

                            </Card.Body>

                        </Card>
                    </div>


                </div>

            </div >
        );
    }
    else return <p>loading...</p>



}

export default TrangChiTietNV;