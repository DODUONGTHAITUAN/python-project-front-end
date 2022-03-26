import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import Guides from '../../components/Client/Guides';
import Specifications from '../../components/Client/Specifications';
import ProductView from '../../components/Client/ProductView';

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
                        <div className="dp__body__row">
                            <ProductView />
                        </div>
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
