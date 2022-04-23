import {
    Button,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Row,
} from 'reactstrap';

const PurchaseItem = () => {
    return (
        <Card>
            <CardHeader>
                <div className='d-flex align-items-center gap-3'>
                    <i
                        className='fas fa-ambulance'
                        style={{ color: '#ddd' }}
                    ></i>
                    <span>Giao hàng thành công</span>
                </div>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-10'>
                        <div className='d-flex gap-3'>
                            <img
                                src='https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370871358_ip-11-dd.png'
                                alt=''
                            />
                            <div className='d-flex flex-column justify-content-between'>
                                <span style={{ fontSize: 16 }}>
                                    Giá Đỡ Laptop Hợp Kim Nhôm Cao Cấp Có Thể
                                    Gấp Gọn, Giúp Tản Nhiệt Laptop, Macbook, Máy
                                    Tính Xách Tay. 07 Vị Trí Điều Chỉnh Góc Độ.
                                    Hàng Chính Hãng Tamayoko FS060
                                </span>
                                <span className='d-flex align-items-center gap-3'>
                                    <i
                                        className='fas fa-store-alt'
                                        style={{ color: '#ddd' }}
                                    ></i>
                                    <span>Future Store</span>
                                </span>
                                <span className='d-flex align-items-center gap-3'>
                                    <i
                                        className='fas fa-memory'
                                        style={{ color: '#ddd' }}
                                    ></i>
                                    <span>6GB Ram</span>
                                </span>
                                <span className='d-flex align-items-center gap-3'>
                                    <i
                                        className='fas fa-hdd'
                                        style={{ color: '#ddd' }}
                                    ></i>
                                    <span>128GB Rom</span>
                                </span>

                                <span className='d-flex align-items-center gap-3'>
                                    <i
                                        className='fas fa-hdd'
                                        style={{ color: '#ddd' }}
                                    ></i>
                                    <span
                                        className='fw-bold'
                                        style={{ fontSize: 16 }}
                                    >
                                        x10
                                    </span>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-2 d-flex justify-content-end'>
                        <span className='fw-bold' style={{ fontSize: 16 }}>
                            4.999.999đ
                        </span>
                    </Col>
                </Row>
            </CardBody>
            <CardFooter>
                <Row>
                    <Col className='col-12'>
                        <div className='d-flex justify-content-end'>
                            <p style={{ fontSize: 17 }}>
                                <span
                                    className='fw-bold'
                                    style={{ marginRight: 5 }}
                                >
                                    Tổng tiền:
                                </span>
                                <span>40.999.999₫</span>
                            </p>
                        </div>
                    </Col>
                </Row>

                <Row className='mb-2'>
                    <Col className='d-flex justify-content-end gap-3 algin-items-center'>
                        <Button style={{ height: 35, padding: '0 15px' }}>
                            Mua lại
                        </Button>
                        <Button style={{ height: 35, padding: '0 15px' }}>
                            Xem chi tiết
                        </Button>
                    </Col>
                </Row>
            </CardFooter>
        </Card>
    );
};

export default PurchaseItem;
