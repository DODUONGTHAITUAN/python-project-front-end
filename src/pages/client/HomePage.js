import { Redirect } from 'react-router';
import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import { connect } from 'react-redux';

const HomePage = (props) => {
    const { isLoggedIn } = props;
    const linkToRedirect = isLoggedIn ? '/' : '/login';
    return (
        <div className="home">
            <Header />
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.admin.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
