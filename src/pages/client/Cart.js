import EmptyCart from "../../components/Client/EmptyCart";
import Footer from "../../components/Client/Footer";
import Header from "../../components/Client/Header";

const Cart = () => {
    return (
        <div className="cart">
            <Header />
            <main className="cart__content">
                <EmptyCart />
            </main>
            <Footer />
        </div>
    );
};

export default Cart;
