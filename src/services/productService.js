import axios from '../axios';

const productService = {};

productService.handleGetProductsPagination = (data) => {
    return axios.get('/product/get-products', {
        params: { page: data.page, per_page: data.per_page },
    });
};

productService.handlegetProductById = (id) => {
    return axios.get('/product/get-product-by-id', {
        params: { id },
    });
};

export default productService;
