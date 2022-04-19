import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
//import { Redirect } from 'react-router';

import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import PromotionPhone from '../../components/Client/Section/PromotionPhone';
import AllProduct from '../../components/Client/AllProduct';
import homeService from '../../services/homeService';
import SliderList from '../../components/Client/Slider/SliderList';
import FeaturePhone from '../../components/Client/Section/FeaturePhone';

const HomePage = (props) => {
    // const [products, setProducts] = useState([]);
    // const { isLoggedIn } = props;
    // //    const linkToRedirect = isLoggedIn ? '/' : '/login';

    // const user = {
    //     username: 'tuan123',
    //     password: '12345',
    // };

    useEffect(() => {
        const handleLoginUser = async () => {
            const res = await homeService.getAllProductService();
        };

        handleLoginUser();
        return () => console.log('Hello world');
    }, []);

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
    isLoggedIn: state.admin.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(HomePage)
);
