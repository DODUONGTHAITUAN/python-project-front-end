import { connect } from 'react-redux';
import { processLogout } from '../../../store/actions/userActions';

const MyAccount = (props) => {
    const { processLogout, userInfo } = props;
    console.log(userInfo);
    const handleLogoutAccount = () => {
        processLogout();
    };

    const handleRedirectOrder = () => {};

    return (
        <ul className='navbar-nav '>
            <li className='nav-item profile'>
                <span className='nav-link  d-flex align-items-center flex-column'>
                    <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp'
                        className='rounded-circle'
                        height={30}
                        alt='Avatar'
                    />
                    <span style={{ color: '#fff' }}>
                        {userInfo?.fullName || 'Tài khoản'}
                    </span>
                </span>
                <ul className='profile__menu'>
                    <li
                        className='profile__menu__item'
                        onClick={handleRedirectOrder}
                    >
                        Đơn hàng của tôi
                    </li>
                    <li className='profile__menu__item'>Chỉnh sửa thông tin</li>
                    <li
                        className='profile__menu__item'
                        onClick={handleLogoutAccount}
                    >
                        Đăng xuất
                    </li>
                </ul>
            </li>
        </ul>
    );
};

const mapStateToProps = (state) => ({
    userInfo: state.user.userInfo,
    isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
    processLogout: () => dispatch(processLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
