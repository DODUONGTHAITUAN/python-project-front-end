import Header from "../../components/Client/Header";
import Footer from "../../components/Client/Footer";
import Guides from "../../components/Client/Guides";

const DetailProduct = () => {
    return (
        <div className="dp">
            <Header />
            <main
                className="dp__content"
                style={{ backgroundColor: "#f8f9fa" }}
            >
                <div className="wrapper">
                    <div className="dp__content__header">
                        <div className="dp__content__header__top">
                            <span>OPPO Reno6 Z 5G</span>
                        </div>
                        <div className="dp__content__header__main">
                            <div className="dp__content__header__main__left"></div>
                        </div>
                    </div>
                    <div className="dp__content__body">
                        <Guides />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DetailProduct;
