import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';
import GuideList from '../../components/Client/Guide/GuideList';
import Specifications from '../../components/Client/Specifications/Specifications';
import ProductView from '../../components/Client/Product/ProductView';

const DetailProduct = () => {
    return (
        <div className='dp'>
            <Header />
            <main
                className='dp__content pt-5'
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div className='wrapper'>
                    <div className='dp__body'>
                        <div className='dp__body__row'>
                            <ProductView />
                        </div>
                        <div className='dp__body__main'>
                            <Specifications />
                        </div>
                        <GuideList />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DetailProduct;
