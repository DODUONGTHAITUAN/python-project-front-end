import axios from '../axios';

const lineItemService = {};

lineItemService.handleCreateMultipleLineItem = (data) => {
    return axios.post('/line-item/create/multiple', { data });
};

lineItemService.handleGetLineItemsByOrderId = (data) => {
    return axios.get('/line-item/get-line-items', { params: { ...data } });
};

export default lineItemService;
