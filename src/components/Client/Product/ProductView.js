import { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const ProductView = (props) => {
    useEffect(() => {
        document.title = 'Xiaomi Redmi Note 11 4GB - 64GB';
    }, []);
    const { history } = props;
    return (
        <div className='pw'>
            <div className='pw__heading'>
                <div className='pw__heading__left'>
                    <span>Xiaomi Redmi Note 11 4GB - 64GB</span>
                </div>
                <div className='pw__heading__right'></div>
            </div>
            <div className='pw__main'>
                <div className='pw__main__left'>
                    <img
                        src='https://images.fpt.shop/unsafe/fit-in/580x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/11/637825879369097743_iphone-13-pro-max-dd-1.jpg'
                        width={'100%'}
                        alt='product-view'
                    />
                    <div className='pw__main__left__features'>
                        <div className='pw__main__left__features__item'>
                            <i className='far fa-images'></i>
                            <span>Xem thêm 20 ảnh</span>
                        </div>
                        <div className='pw__main__left__features__item'>
                            <i className='far fa-images'></i>
                            <span>Xem thêm 20 ảnh</span>
                        </div>
                        <div className='pw__main__left__features__item'>
                            <i className='far fa-images'></i>
                            <span>Xem thêm 20 ảnh</span>
                        </div>
                        <div className='pw__main__left__features__item'>
                            <i className='far fa-images'></i>
                            <span>Xem thêm 20 ảnh</span>
                        </div>
                    </div>
                </div>
                <div className='pw__main__right'>
                    <div className='pw__main__right__price'>4.290.000₫</div>
                    <div className='pw__main__right__options'>
                        <div className='pw__main__right__options__item'>
                            <input type='radio' />
                            <span>4.290.000₫</span>
                        </div>
                        <div className='pw__main__right__options__item'>
                            <input type='radio' />
                            <span>4.290.000₫</span>
                        </div>
                    </div>
                    <div className='pw__main__right__box'>
                        <div className='pw__main__right__box__title'>
                            <span>Nhận ngay khuyến mại đặc biệt</span>
                        </div>
                        <div className='pw__main__right__box__list'>
                            <div className='pw__main__right__box__list__item'>
                                <i className='far fa-check-circle'></i>
                                <span>
                                    Giảm ngay 400.000đ áp dụng đến 20/03
                                </span>
                            </div>
                            <div className='pw__main__right__box__list__item'>
                                <i className='far fa-check-circle'></i>
                                <span>
                                    Giảm ngay 400.000đ áp dụng đến 20/03
                                </span>
                            </div>
                            <div className='pw__main__right__box__list__item'>
                                <i className='far fa-check-circle'></i>
                                <span>
                                    Giảm ngay 400.000đ áp dụng đến 20/03
                                </span>
                            </div>
                            <div className='pw__main__right__box__list__item'>
                                <i className='far fa-check-circle'></i>
                                <span>
                                    Giảm ngay 400.000đ áp dụng đến 20/03
                                </span>
                            </div>
                            <div className='pw__main__right__box__list__item'>
                                <i className='far fa-check-circle'></i>
                                <span>
                                    Giảm ngay 400.000đ áp dụng đến 20/03
                                </span>
                            </div>
                            <div className='pw__main__right__box__list__item'>
                                <i className='far fa-check-circle'></i>
                                <span>
                                    Giảm ngay 400.000đ áp dụng đến 20/03
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='pw__main__right__actions'>
                        <button
                            className='pw__main__right__actions__pay-now'
                            onClick={() => history?.push('/cart')}
                        >
                            Mua ngay
                        </button>
                        <button className='pw__main__right__actions__add-to-cart'>
                            Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProductView)
);
