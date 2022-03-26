import { withRouter, useHistory } from "react-router-dom";

const Product = ({ link, listLayout }) => {
    const history = useHistory();
    const handleRedirect = () => {
        history.push("/detail-product");
    };

    return (
        <div className={`product ${listLayout === 2 ? "list-layout" : ""}`}>
            <div className="product__img">
                <img
                    src={link.link}
                    alt="iphone"
                    onClick={() => handleRedirect()}
                />
            </div>
            <div className="product__main">
                <div className="product__main__top">
                    <div className="product__main__top__name">
                        <span>IPhone 12 128GB</span>
                    </div>
                    <div className="product__main__top__price">
                        <span>
                            22.990.000 <u>đ</u>
                        </span>
                    </div>
                </div>
                <div className="product__main__mid">
                    <div className="product__main__mid__item">
                        <i className="fas fa-microchip"></i>
                        <span>Apple A15 Bionic</span>
                    </div>
                    <div className="product__main__mid__item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>6.1 inch</span>
                    </div>
                    <div className="product__main__mid__item">
                        <i className="fas fa-memory"></i>
                        <span>4 GB</span>
                    </div>
                    <div className="product__main__mid__item">
                        <i className="fas fa-hdd"></i>
                        <span>128 GB</span>
                    </div>
                </div>
                <div className="product__main__actions">
                    <button
                        className="product__main__actions__btn-pay"
                        onClick={handleRedirect}
                    >
                        Mua ngay
                    </button>
                    <button className="product__main__actions__btn-compare">
                        So sánh
                    </button>
                </div>
            </div>
            <div
                className="product__sale"
                style={{ display: `${listLayout === 2 ? "block" : "none"}` }}
            >
                <span className="product__sale__title">Khuyến mãi</span>
                <div className="product__sale__list">
                    <div className="product__sale__list__item">
                        <img
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg"
                            alt="vnppay"
                        />
                        <span>
                            Giảm thêm 500.000đ cho iPhone khi thanh toán qua
                            VNPAY
                        </span>
                    </div>
                    <div className="product__sale__list__item">
                        <img
                            src="https://images.fpt.shop/unsafe/fit-in/45x45/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/5/637637723581833310_637424313308028550_vnpay.jpg"
                            alt="vnppay"
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

export default withRouter(Product);
