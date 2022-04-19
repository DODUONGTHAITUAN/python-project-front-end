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
    cart: {},
    products: [],
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            return state;

        case actionTypes.REMOVE_FROM_CART:
            return state;

        case actionTypes.ADJUST_QTY:
            return state;

        case actionTypes.LOAD_CURRENT_ITEM:
            return state;

        default:
            return state;
    }
};

export default shoppingReducer;
