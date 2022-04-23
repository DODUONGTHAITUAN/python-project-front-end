import { useEffect } from 'react';
import PurchaseList from '../../components/Client/Account/PurchaseList';
import Footer from '../../components/Client/Footer';
import Header from '../../components/Client/Header';

const MyPurchase = () => {
    useEffect(() => {
        document.title = 'Đơn hàng của tôi | Tiki.vn';
    }, []);
    return (
        <div className='mp'>
            <Header />
            <div className='mp__main' style={{ backgroundColor: '#f5f5fa' }}>
                <div className='wrapper'>
                    <PurchaseList />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPurchase;
