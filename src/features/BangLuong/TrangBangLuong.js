import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { useEffect } from 'react'

import {
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';

import { useDispatch, useSelector } from 'react-redux'
import { layBangLuong } from './BangLuongSlice';

function TrangBangLuong(props) {

    const dispatch = useDispatch();

    // sẽ chạy lại Callback mỗi khi dispatch thay đổi
    useEffect(() => {
        dispatch(layBangLuong());

    }, [dispatch])


    const { BangLuong, loading } = useSelector((state) => state.BangLuong);


    if (loading !== 'fulfilled') return <p>loading...</p>


    const HienThiBangLuong = BangLuong.map((e) => {
        return (
            <div key={e.id} className="col-12 col-sm-6 col-md-4 ">
                <Card >
                    <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>Mã nhân viên:{e.id}</Card.Text>
                        <Card.Text>Hệ số lương:{e.salaryScale}</Card.Text>
                        <Card.Text>Số ngày làm thêm:{e.overTime}</Card.Text>
                        <Card.Text>Lương: {new Intl.NumberFormat('vi-VN', { maximumSignificantDigits: 3 }).format(e.salary)}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );

    });

    return (
        <div className="TrangBangLuong">
            <h1>Bảng lương</h1>
            <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Bảng lương</BreadcrumbItem>
                </Breadcrumb>
                <div className='row'>
                    {HienThiBangLuong}
                </div>
            </div>
        </div>
    );
}

export default TrangBangLuong;
