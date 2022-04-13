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
}

export default CommonUtils;
