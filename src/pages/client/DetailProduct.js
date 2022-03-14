import Header from '../../components/Client/Header';
import Footer from '../../components/Client/Footer';

const DetailProduct = () => {
    return (
        <div className="dp">
            <Header />
            <main className="dp__content">
                <div className="wrapper">
                    <div className="dp__content__name-product">
                        <p>iPhone 13 Pro Max 128GB</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DetailProduct;
