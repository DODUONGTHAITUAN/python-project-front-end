import Product from './Product';

const PromotionPhone = () => {
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
            link: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/10/1/637686973775896947_ip-12-dd.jpg',
        },
        {
            id: Math.random(),
            link: 'https://images.fpt.shop/unsafe/fit-in/214x214/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/2/28/637816731075634766_xiaomi-redmi-note-11s-xam-dd-2.jpg',
        },
    ];
    return (
        <div className="pp">
            <div className="wrapper" style={{ backgroundColor: '#fff' }}>
                <div className="pp__top">
                    <span>Điện thoại khuyến mãi</span>
                    <span>Xem tất cả</span>
                </div>
                <div className="pp__products">
                    {links.map((item) => (
                        <Product link={item} key={item.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromotionPhone;
