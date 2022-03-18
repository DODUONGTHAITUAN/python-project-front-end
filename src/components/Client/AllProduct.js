import SideBar from './SideBar';
import Product from './Product';
import iphone from '../../assets/home/product/iphone.jpg';
import { useState } from 'react';

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

const features = [
    {
        id: Math.random() * 100,
        title: 'Bán chạy nhất',
    },
    {
        id: Math.random() * 100,
        title: 'Trả góp 0%',
    },
    {
        id: Math.random() * 100,
        title: 'Giá thấp',
    },
    {
        id: Math.random() * 100,
        title: 'Giá cao',
    },
    {
        id: Math.random() * 100,
        title: 'Ưu đãi online',
    },
];

const AllProduct = () => {
    const [isGridLayout, setGridlayout] = useState(1);
    const [feature, setFeature] = useState(features[0].id);

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
                                    {features.map((fea) => (
                                        <span
                                            onClick={() => setFeature(fea.id)}
                                            className={`ap__right__top__left__features__item ${
                                                feature === fea.id && 'active'
                                            }`}
                                            key={fea.id}
                                        >
                                            {fea.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="ap__right__top__right">
                                <i
                                    className={`fas fa-th-large ${
                                        isGridLayout === 1 && 'active'
                                    }`}
                                    onClick={() => setGridlayout(1)}
                                ></i>
                                <i
                                    className={`fas fa-bars ${
                                        isGridLayout === 2 && 'active'
                                    }`}
                                    onClick={() => setGridlayout(2)}
                                ></i>
                            </div>
                        </div>
                        <div
                            className="ap__right__bottom"
                            style={{
                                flexDirection: `${
                                    isGridLayout ? 'row' : 'column'
                                }`,
                            }}
                        >
                            {links.map((item) => (
                                <Product
                                    link={item}
                                    key={item.id}
                                    listLayout={isGridLayout}
                                />
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
