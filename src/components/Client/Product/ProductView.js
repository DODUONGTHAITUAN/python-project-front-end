import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addToCart } from '../../../store/actions/shoppingActions';
import CommonUtils from '../../../utils/CommonUtils';

const ProductView = (props) => {
    const { history, addToCart, productItem } = props;
    useEffect(() => {
        document.title =
            productItem?.product_name || 'Xiaomi Redmi Note 11 4GB - 64GB';
    }, [productItem]);
    return (
        <div className='pw'>
            <div className='pw__heading'>
                <div className='pw__heading__left'>
                    <span>{productItem && productItem.product_name}</span>
                </div>
                <div className='pw__heading__right d-flex align-items-center gap-2'>
                    <div className='pw__heading__right__starts d-flex algin-items-center gap-1'>
                        {[1, 2, 3, 4, 5].map((item) => (
                            <i className='fas fa-star' key={item}></i>
                        ))}
                    </div>
                    <div className='pw__heading__right__reviews'>
                        15 đánh giá |
                    </div>
                    <div className='pw__heading__right__qa'>4528 hỏi đáp</div>
                    <div className='pw__heading__right__compare d-flex align-items-center gap-1'>
                        <i className='fas fa-plus-circle'></i>
                        <span>So sánh</span>
                    </div>
                </div>
            </div>
            <div className='pw__main'>
                <div className='pw__main__left'>
                    <div className='d-flex justify-content-center py-3'>
                        <img
                            src={
                                productItem?.option?.image ||
                                'https://images.fpt.shop/unsafe/fit-in/580x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/11/637825879369097743_iphone-13-pro-max-dd-1.jpg'
                            }
                            height={'390px'}
                            alt='product-view'
                        />
                    </div>
                    <div className='pw__main__left__features d-flex align-items-center gap-5 justify-content-center'>
                        <div className='pw__main__left__features__item d-flex align-items-center flex-column'>
                            <i
                                className='far fa-images mb-2 d-inline-block'
                                style={{ fontSize: 30 }}
                            ></i>
                            <span>Xem thêm 20 ảnh</span>
                        </div>
                        <div className='pw__main__left__features__item d-flex align-items-center flex-column'>
                            <i
                                className='fas fa-box-open'
                                style={{ fontSize: 30 }}
                            ></i>
                            <span>Trong hộp có gì</span>
                        </div>
                        <div className='pw__main__left__features__item d-flex align-items-center flex-column'>
                            <i
                                className='fas fa-circle-notch'
                                style={{ fontSize: 30 }}
                            ></i>
                            <span>Xoay 360&deg;</span>
                        </div>
                    </div>
                </div>
                <div className='pw__main__right'>
                    <div className='pw__main__right__price'>
                        <span>
                            {productItem?.option?.price || '4.290.000'}₫
                        </span>
                        <span>
                            {CommonUtils.increaseCurrency(
                                productItem?.option?.price || '4.299.000'
                            )}
                        </span>
                    </div>
                    <div className='pw__main__right__options'>
                        {[1, 2, 3, 4].map((item) => (
                            <div
                                className={`pw__main__right__options__item ${
                                    item === 1 ? 'active' : ''
                                }`}
                                key={item}
                            >
                                <div className='d-flex align-items-center gap-2'>
                                    <input type='radio' />
                                    <label>64GB</label>
                                </div>
                                <span>4.290.000₫</span>
                            </div>
                        ))}
                    </div>
                    <div className='pw__heading__right__colors'>
                        <div className='pw__heading__right__colors__item'>
                            <img src='' alt='' />
                        </div>
                    </div>
                    <div className='pw__main__right__box'>
                        <div className='pw__main__right__box__title'>
                            <span>Ưu đãi thêm</span>
                        </div>
                        <div className='pw__main__right__box__list'>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <div
                                    className='pw__main__right__box__list__item'
                                    key={item}
                                >
                                    <i className='far fa-check-circle'></i>
                                    <span>
                                        Giảm ngay 400.000đ áp dụng đến 20/03
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='pw__main__right__actions'>
                        <button
                            className='pw__main__right__actions__pay-now btn btn-primary'
                            onClick={() => history?.push('/cart')}
                        >
                            Mua ngay
                        </button>
                        <button
                            className='pw__main__right__actions__add-to-cart btn btn-danger'
                            onClick={() =>
                                addToCart(productItem ? productItem.id : 1)
                            }
                        >
                            <i className='fas fa-cart-arrow-down'></i>
                            <span>Thêm vào giỏ hàng</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    addToCart: (itemId) => dispatch(addToCart(itemId)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProductView)
);
