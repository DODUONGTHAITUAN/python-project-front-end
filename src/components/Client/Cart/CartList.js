import { connect } from 'react-redux';
import { Card, CardBody, CardHeader } from 'reactstrap';

import CartItem from './CartItem';

const CartList = (props) => {
    return (
        <Card className='mb-4'>
            <CardHeader className='py-3'>
                <h5 className='mb-0 fw-bold'>Có 1 sản phẩm trong giỏ hàng</h5>
            </CardHeader>
            <CardBody className='card-body'>
                <CartItem />
                <hr className='my-4' />
                <CartItem />
            </CardBody>
        </Card>
    );
};

export default connect(null, null)(CartList);
