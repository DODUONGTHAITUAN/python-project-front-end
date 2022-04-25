import { useState } from 'react';
import ReviewProduct from './ReviewProduct';
import SpecificationsTable from './SpecificationsTable';

const Specifications = () => {
    const [isShowSpecifications, setShowSpecifications] = useState(false);

    return (
        <div className='s-main'>
            <div className='s-main__left'>
                <div className='s-main__left__heading mb-2'>
                    <span> Đặc điểm nổi bật của OPPO A94 8GB-128G</span>
                </div>
                <ReviewProduct />
            </div>
            <div className='s-main__right'>
                <div className='s-main__right__heading mb-2'>
                    <span>Thông số kỹ thuật</span>
                </div>
                <div className='s-main__right__table'>
                    <SpecificationsTable
                        isShowSpecifications={isShowSpecifications}
                    />
                </div>
                <div className='s-main__right__more'>
                    <span
                        onClick={() =>
                            setShowSpecifications(!isShowSpecifications)
                        }
                    >
                        {!isShowSpecifications ? 'Xem thêm' : 'Ẩn bớt'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Specifications;
