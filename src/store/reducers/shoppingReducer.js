import actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    /**
     * {
     *  total_item
     * total_price
     * [] --> item {qty}
     *
     * }
     */
    cart: [],
    products: [],
    totalProducts: 0,
    totalPrice: 0,
};

const mergeProducts = (currProducts, newProducts) => {
    const data = newProducts?.filter(
        (p) => !currProducts.find((item) => item.id === p.id)
    );
    return data || [];
};

// Add to cart product
const handleAddToCartAction = (state, itemId) => {
    const productInCart = state.cart.find((item) => item.id === itemId);
    if (productInCart) {
        // exist
        return [
            ...state.cart.map((item) => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            }),
        ];
    } else {
        // No exist
        return [
            ...state.cart,
            {
                quantity: 1,
                ...state.products.find((item) => item.id === itemId),
            },
        ];
    }
};

// const handleAdjustQtyAction = (state, item)

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const cartList = handleAddToCartAction(
                state,
                action.payload.itemId
            );
            return {
                ...state,
                cart: cartList,
                totalProducts: cartList.length,
            };

        case actionTypes.REMOVE_FROM_CART:
            const newCart = [
                ...state.cart.filter((item) => item.id !== action.payload.id),
            ];
            return {
                ...state,
                cart: newCart,
                totalProducts: newCart.length,
            };

        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => {
                    console.log(item.id);
                    console.log(action.payload.id);
                    if (item.id === action.payload.id) {
                        console.log('Yeppp');
                        item.quantity = action.payload.qty;
                    }
                    return item;
                }),
            };

        case actionTypes.LOAD_CURRENT_ITEM:
            const data = mergeProducts(state.products, action.payload.item);
            return {
                ...state,
                products: [...state.products, ...data],
            };

        default:
            return state;
    }
};

export default shoppingReducer;
