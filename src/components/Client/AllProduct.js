import SideBar from './SideBar';
import Product from './Product';

import iphone from '../../assets/home/product/iphone.jpg';

const AllProduct = () => {
    const links = [
        {
            id: Math.random(),
            link: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/3/7/637822533541223450_oppo-reno7-z-dd-1.jpg',
        },
        {
            id: Math.random(),
            link: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/11/637643170642413961_samsung-galaxy-z-fold3-xanh-dd.jpg',
        },
        {
            id: Math.random(),
            link: iphone,
        },
    ];

    return (
        <div className="ap">
            <div className="wrapper">
                <div className="row align-items-start" style={{ margin: 0 }}>
                    <div className="col-3 ap__left">
                        <SideBar />
                    </div>
                    <div
                        className="col-9 ap__right"
                        style={{ backgroundColor: '#fff' }}
                    >
                        <div className="ap__right__top">
                            <div className="ap__right__top__left">
                                <span className="ap__right__top__left__label">
                                    Ưu tiên xem:
                                </span>
                                <div className="ap__right__top__left__features">
                                    <span className="ap__right__top__left__features__item active">
                                        Bán chạy nhất
                                    </span>

                                    <span className="ap__right__top__left__features__item">
                                        Trả góp 0%
                                    </span>
                                    <span className="ap__right__top__left__features__item">
                                        Giá thấp
                                    </span>
                                    <span className="ap__right__top__left__features__item">
                                        Giá cao
                                    </span>
                                    <span className="ap__right__top__left__features__item">
                                        Ưu đãi online
                                    </span>
                                </div>
                            </div>
                            <div className="ap__right__top__right">
                                <i className="fas fa-th-large active"></i>
                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                        <div className="ap__right__bottom">
                            {links.map((item) => (
                                <Product link={item} key={item.id} />
                            ))}
                        </div>
                        <div className="ap__right__btn">
                            <span>Xem thêm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
