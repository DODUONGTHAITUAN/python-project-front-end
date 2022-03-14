import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <div className="header__container">
            <header className="wrapper header">
                <div className="header__top">
                    <div className="header__top__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header__top__group">
                        <input
                            className="header__top__group__search"
                            placeholder="Tìm điện thoại..."
                        />
                        <button className="header__top__group__btn">
                            <i class="fas fa-search"></i>
                            <span>Tìm kiếm</span>
                        </button>
                    </div>
                    <div className="header__top__acc">
                        <i class="far fa-user"></i>
                        <span>Đăng nhập</span>
                    </div>
                    <div className="header__top__cart">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Giỏ hàng</span>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__bottom__menu"></div>
                </div>
            </header>
        </div>
    );
};

export default Header;
