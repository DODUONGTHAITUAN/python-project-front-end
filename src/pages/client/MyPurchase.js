import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PurchaseList from '../../components/Client/Account/PurchaseList';
import Footer from '../../components/Client/Footer';
import Header from '../../components/Client/Header';
import orderServive from '../../services/orderServive';

const MyPurchase = (props) => {
    const { userInfo } = props;
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        document.title = 'Đơn hàng của tôi | Tiki.vn';
    }, []);

    useEffect(() => {
        const handleGetOrderByUserId = async () => {
            if (userInfo?.id) {
                const res = await orderServive.handleGetOrderByUserId(
                    userInfo.id
                );
                if (res.data?.code === 0) {
                    setOrders(res.data.orders);
                }
            }
        };
        handleGetOrderByUserId();
    }, [userInfo]);

    console.log(orders);
    return (
        <div className='mp'>
            <Header />
            <div className='mp__main' style={{ backgroundColor: '#f5f5fa' }}>
                <div className='wrapper'>
                    {orders?.length > 0 &&
                        orders.map((item, i) => (
                            <PurchaseList
                                lineItems={item.line_items}
                                key={item.id}
                            />
                        ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    userInfo: state.user.userInfo,
});

export default connect(mapStateToProps, null)(MyPurchase);
