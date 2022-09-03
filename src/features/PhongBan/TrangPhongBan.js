import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LayPhongBan } from './PhongBanSlice'

function TrangPhongBan() {

    const dispatch = useDispatch();

    const { PhongBan, loading } = useSelector((state) => state.PhongBan);

    useEffect(() => {
        dispatch(LayPhongBan())
    }, [dispatch])

    if (loading !== 'fulfilled') return <p>loading...</p>

    const mang = PhongBan.map((e) => {
        return (
            <div key={e.id} className="col-6 col-sm-4 col-md-2 "  >

                <Card >
                    <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>Số lượng nhân viên: {e.numberOfStaff}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    });

    return (
        <div className="TrangPhongBan">
            <h1>Phòng ban</h1>

            <div className='container'>
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/">Nhân Viên</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Phòng ban</BreadcrumbItem>
                </Breadcrumb>
                <div className='row' >
                    {mang}
                </div>
            </div>

        </div>
    );
}

export default TrangPhongBan;
