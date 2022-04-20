import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//import { Redirect } from 'react-router';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import PromotionPhone from '../../components/Client/Section/PromotionPhone';
import AllProduct from '../../components/Client/AllProduct';
import SliderList from '../../components/Client/Slider/SliderList';
import FeaturePhone from '../../components/Client/Section/FeaturePhone';

const HomePage = (props) => {
    return (
        <div className='home'>
            <Header />
            <main
                className='home__content'
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div className='wrapper pt-5'>
                    <SliderList />
                </div>
                <PromotionPhone />
                <div className='wrapper pt-5'>
                    <SliderList />
                </div>
                <FeaturePhone />
                <div className='wrapper py-5'>
                    <SliderList />
                </div>
                <AllProduct />
            </main>
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => ({
    isLoggedIn: state.user.isLoggedIn,
});

export default withRouter(connect(mapStateToProps, null)(HomePage));
