import productService from '../services/productService';

class CommonUtils {
    static isNumber1(number) {
        if (number === 1) return true;
        return false;
    }
    static formatAllcodesToSelectOption(allcodes) {
        const options = allcodes.map((item) => ({
            label: item.value,
            value: item.keyMap,
        }));
        return options;
    }

    static validateOption(option) {
        if (
            !option.productID ||
            !option.ram ||
            !option.rom ||
            !option.price ||
            !option.image ||
            !option.colorID
        ) {
            return false;
        }
        return true;
    }

    static async handleGetProductsPagination(page, per_page) {
        const data = { page, per_page };
        const res = await productService.handleGetProductsPagination(data);
        if (res.data?.code === 0) {
            return res.data.data.products;
        }
        return [];
    }
}

export default CommonUtils;
