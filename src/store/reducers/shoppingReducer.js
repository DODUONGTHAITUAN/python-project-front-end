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
    product: [],
};

const shoppingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default shoppingReducer;
