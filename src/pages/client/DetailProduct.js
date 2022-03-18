import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Guides from '../../components/Client/Guides';
import Specifications from '../../components/Client/Specifications';

const DetailProduct = () => {
    return (
        <div className="dp">
            <Header />
            <main
                className="dp__content"
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div className="wrapper">
                    <div className="dp__body">
                        <div className="dp__body__row"></div>
                        <div className="dp__body__main">
                            <Specifications />
                        </div>
                        <Guides />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DetailProduct;
