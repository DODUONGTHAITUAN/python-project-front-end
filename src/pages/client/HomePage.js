//import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import PromotionPhone from '../../components/Client/PromotionPhone';
import AllProduct from '../../components/Client/AllProduct';

const HomePage = (props) => {
    const { isLoggedIn } = props;
    //    const linkToRedirect = isLoggedIn ? '/' : '/login';

    return (
        <div className="home">
            <Header />
            <main
                className="home__content"
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <PromotionPhone />
                <PromotionPhone />
                <AllProduct />
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.admin.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
