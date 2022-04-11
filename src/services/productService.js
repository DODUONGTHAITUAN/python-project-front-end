import axios from '../axios';

const productService = {};

productService.handleGetProductsPagination = (data) => {
    return axios.get('/product/get-products', {
        params: { page: data.page, per_page: data.per_page },
    });
};

export default productService;
