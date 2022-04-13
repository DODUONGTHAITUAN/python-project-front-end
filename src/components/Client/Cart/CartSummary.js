import {
    Button,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

const CartSummary = () => {
    return (
        <Card className='card mb-4'>
            <CardHeader className='card-header py-3'>
                <strong className='mb-0'>Tổng đơn hàng</strong>
            </CardHeader>
            <CardBody>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem className='list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0'>
                        Tạm tính:
                        <span>$53.98</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between align-items-center px-0'>
                        Phí giao hàng:
                        <span>Gratis</span>
                    </ListGroupItem>
                    <ListGroupItem className='d-flex justify-content-between align-items-center border-0 px-0 mb-3'>
                        <div>
                            <strong>Tổng cộng:</strong>
                            <strong>
                                <p className='mb-0'>(Bao gồm VAT)</p>
                            </strong>
                        </div>
                        <span>
                            <strong>$53.98</strong>
                        </span>
                    </ListGroupItem>
                </ListGroup>
                <Button
                    className='btn btn-primary btn-lg btn-block'
                    style={{
                        backgroundColor: 'rgb(255, 66, 78)',
                    }}
                >
                    Mua Hàng
                </Button>
            </CardBody>
        </Card>
    );
};

export default CartSummary;