import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

import { addToCart } from '../../../store/actions/shoppingActions';

const plaholder = 'https://dummyimage.com/214x214/ffffff/ffffff.png';

function elementInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
        (rect.top >= 0 && rect.left >= 0) ||
        rect.top >=
            (window.innerHeight || document.documentElement.clientHeight)
    );
}

const ProductItem = ({ item, listLayout, addToCart }) => {
    const [loaded, setLoaded] = useState(false);
    const imgElm = useRef();

    const history = useHistory();
    const handleRedirectProductDetail = () => {
        history.push('/detail-product');
    };

    const handleRedirectCart = (id) => {
        addToCart(id);
        history.push('/cart');
    };

    const handleGetImg = (value) => {
        imgElm.current = value;
    };

    const handleScroll = () => {
        //console.log(elementInViewport(imgElm.current), imgElm.current);
        if (!loaded && elementInViewport(imgElm.current)) {
            const imgLoader = new Image();
            imgLoader.src = item?.image || plaholder;

            imgLoader.onload = () => {
                imgElm.current.setAttribute('src', `${item?.image || ''}`);
                imgElm.current.classList.add('opacity');
                setLoaded(true);
            };
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`product ${listLayout === 2 ? 'list-layout' : ''}`}>
            <div className='product__img'>
                <img
                    className='lazy-image'
                    ref={(value) => handleGetImg(value)}
                    src={plaholder}
                    alt={item?.product_name}
                    onClick={() => handleRedirectProductDetail()}
                />
            </div>
            <div className='product__main'>
                <div className='product__main__top'>
                    <div className='product__main__top__name'>
                        <span>{item?.product_name}</span>
                    </div>
                    <div className='product__main__top__price'>
                        <span>
                            22.990.000 <u>đ</u>
                        </span>
                    </div>
                </div>
                <div className='product__main__mid'>
                    <div className='product__main__mid__item'>
                        <i className='fas fa-microchip'></i>
                        <span>{item?.cpu}</span>
                    </div>
                    <div className='product__main__mid__item'>
                        <i className='fas fa-mobile-alt'></i>
                        <span>6.1 inch</span>
                    </div>
                    <div className='product__main__mid__item'>
                        <i className='fas fa-memory'></i>
                        <span>4 GB</span>
                    </div>
                    <div className='product__main__mid__item'>
                        <i className='fas fa-hdd'></i>
                        <span>128 GB</span>
                    </div>
                </div>
                <div className='product__main__actions'>
                    <button
                        className='product__main__actions__btn-pay'
                        onClick={() => handleRedirectCart(item.id)}
                    >
                        Mua ngay
                    </button>
                    <button
                        className='product__main__actions__btn-compare'
                        onClick={handleRedirectProductDetail}
                    >
                        Xem Chi Tiết
                    </button>
                </div>
            </div>
            <div
                className='product__sale'
                style={{ display: `${listLayout === 2 ? 'block' : 'none'}` }}
            >
                <span className='product__sale__title'>Khuyến mãi</span>
                <div className='product__sale__list'>
                    <div className='product__sale__list__item'>
                        <img
                            src='https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg'
                            alt='vnppay'
                        />
                        <span>
                            Giảm thêm 500.000đ cho iPhone khi thanh toán qua
                            VNPAY
                        </span>
                    </div>
                    <div className='product__sale__list__item'>
                        <img
                            src='https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg'
                            alt='vnppay'
                        />
                        <span>
                            Giảm thêm 500.000đ cho iPhone khi thanh toán qua
                            VNPAY
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ProductItem)
);
