//import { Redirect } from 'react-router';
import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Header from "../../components/Client/Header";
import Footer from "../../components/Client/Footer";
import PromotionPhone from "../../components/Client/PromotionPhone";
import AllProduct from "../../components/Client/AllProduct";
import homeService from "../../services/homeService";
import { useState } from "react";

const HomePage = (props) => {
    const [products, setProducts] = useState([]);
    const { isLoggedIn } = props;
    //    const linkToRedirect = isLoggedIn ? '/' : '/login';

    const user = {
        username: "tuan123",
        password: "12345",
    };

    useEffect(() => {
        const handleLoginUser = async () => {
            const res = await homeService.getAllProductService();
            console.log(res);
        };

        handleLoginUser();
        return () => console.log("Hello world");
    }, []);
    console.log(products);
    return (
        <div className="home">
            <Header />
            <main
                className="home__content"
                style={{ backgroundColor: "#f8f9fa" }}
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
