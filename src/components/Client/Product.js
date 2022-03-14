import { withRouter, useHistory } from 'react-router-dom';

const Product = ({ link, ...props }) => {
    const history = useHistory();
    const handleRedirect = () => {
        console.log(history);
        history.push('/detail-product');
    };
    return (
        <div className="product">
            <div className="product__img">
                <img src={link.link} alt="iphone" />
            </div>
            <div className="product__name">
                <span>IPhone 12 128GB</span>
            </div>
            <div className="product__prices">
                <span>
                    22.990.000 <u>đ</u>
                </span>
            </div>
            <div className="product__info">
                <div className="product__info__top">
                    <div className="product__info__top__item">
                        <i className="fas fa-microchip"></i>
                        <span>Apple A15 Bionic</span>
                    </div>
                    <div className="product__info__top__item">
                        <i className="fas fa-mobile-alt"></i>
                        <span>6.1 inch</span>
                    </div>
                    <div className="product__info__top__item">
                        <i className="fas fa-memory"></i>
                        <span>4 GB</span>
                    </div>
                    <div className="product__info__top__item">
                        <i className="fas fa-hdd"></i>
                        <span>128 GB</span>
                    </div>
                </div>
                <div className="product__info__bottom"></div>
            </div>
            <div className="product__btns">
                <button
                    className="product__btns__pay-now"
                    onClick={handleRedirect}
                >
                    Mua ngay
                </button>
                <button className="product__btns__compare">So sánh</button>
            </div>
        </div>
    );
};

export default withRouter(Product);
