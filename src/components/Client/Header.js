import { useHistory } from "react-router";

import logo from "../../assets/images/logo.png";

const Header = () => {
    const history = useHistory();

    return (
        <div className="header__container">
            <header className="wrapper header">
                <div className="header__top">
                    <div className="header__top__logo">
                        <img
                            src={logo}
                            alt="logo"
                            onClick={() => history.push("/")}
                        />
                    </div>
                    <div className="header__top__group">
                        <input
                            className="header__top__group__search"
                            placeholder="Tìm điện thoại..."
                        />
                        <button className="header__top__group__btn">
                            <i className="fas fa-search"></i>
                            <span>Tìm kiếm</span>
                        </button>
                    </div>
                    <div className="header__top__acc">
                        <i className="far fa-user"></i>
                        <span onClick={() => history.push("/login")}>
                            Đăng nhập
                        </span>
                    </div>
                    <div
                        className="header__top__cart"
                        onClick={() => history.push("/cart")}
                    >
                        <i className="fas fa-shopping-cart"></i>
                        <span>Giỏ hàng</span>
                        <span className="header__top__cart__count">0</span>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__bottom__menu">
                        <div className="header__bottom__menu__item">
                            <i className="fab fa-apple"></i>
                            <span>iphone</span>
                        </div>
                        <div className="header__bottom__menu__item">
                            <i className="fab fa-android"></i>
                            <span>samsung</span>
                        </div>
                        <div className="header__bottom__menu__item">
                            <i className="fab fa-linux"></i>
                            <span>xiaomi</span>
                        </div>
                        <div className="header__bottom__menu__item">
                            <i className="fas fa-adjust"></i>
                            <span>realme</span>
                        </div>
                        <div className="header__bottom__menu__item">
                            <i className="fab fa-audible"></i>
                            <span>oppo</span>
                        </div>
                        <div className="header__bottom__menu__item">
                            <i className="fab fa-windows"></i>
                            <span>vivo</span>
                        </div>
                        <div className="header__bottom__menu__item">
                            <i className="fab fa-accusoft"></i>
                            <span>vsmart</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
