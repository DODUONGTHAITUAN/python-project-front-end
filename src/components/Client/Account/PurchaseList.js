import PurchaseItem from './PurchaseItem';

const PurchaseList = () => {
    return (
        <div className='pl py-5'>
            <h4 className='mb-3'>Đơn hàng của tôi</h4>
            <PurchaseItem />
        </div>
    );
};

export default PurchaseList;
