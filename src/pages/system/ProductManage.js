import { useEffect, useState } from 'react';
import Select from 'react-select';

import Pagination from '../../components/Customs/Pagination';
import DropdownOption from '../../components/System/DropdownOption';
import ProductModal from '../../components/System/ProductModal';
import allcodeService from '../../services/allcodesService';
import productService from '../../services/productService';
import CommonUtils from '../../utils/CommonUtils';
import { types, keyMaps } from '../../utils/constant';

const ths = [
    {
        id: 1,
        title: 'Date',
        className: 'col col-1',
    },
    {
        id: 2,
        title: 'Product ID',
        className: 'col col-2',
    },
    {
        id: 3,
        title: 'Name',
        className: 'col col-3',
    },
    {
        id: 4,
        title: 'Price',
        className: 'col col-4',
    },
    {
        id: 5,
        title: 'Brand',
        className: 'col col-5',
    },
    {
        id: 6,
        title: 'Actions',
        className: 'col col-6',
    },
];

const tds = [
    {
        id: 1,
        prop: 'product_date',
        className: 'col col-1',
    },
    {
        id: 2,
        prop: 'id',
        className: 'col col-2',
    },
    {
        id: 3,
        title: 'Name',
        prop: 'product_name',
        className: 'col col-3',
    },
    {
        id: 4,
        prop: 'price',
        className: 'col col-4',
    },
    {
        id: 5,
        prop: 'brand_value',
        className: 'col col-5',
    },
];

const ProductManage = () => {
    // Define state
    const [toggleProductModal, setToggleProductModal] = useState(false);
    const [brands, setBrands] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState({});
    const [products, setProducts] = useState([]);
    const [filterProducts, setFiterProducts] = useState([]);

    // Handle logic
    const handleGetAllcodeByType = async (type) => {
        const res = await allcodeService.getAllcodeByType(type);
        if (res.data?.code === 0) {
            const options = CommonUtils.formatAllcodesToSelectOption(
                res.data.allcodes
            );
            setBrands(options);
            setSelectedBrand(options[0]);
        }
    };

    const handleGetProductsPagination = async (page, per_page) => {
        const data = { page, per_page };
        const res = await productService.handleGetProductsPagination(data);
        if (res.data?.code === 0) {
            setProducts(res.data.data.products);
        }
    };

    useEffect(() => {
        handleGetAllcodeByType(keyMaps.BRAND);
        handleGetProductsPagination(1, 5);
    }, []);

    useEffect(() => {
        if (selectedBrand.value !== 'BR1') {
            const newPros = products.filter(
                (pro) => pro.brandID === selectedBrand.value
            );
            setFiterProducts(newPros);
            return;
        }
        setFiterProducts(products);
    }, [selectedBrand, products]);

    return (
        <div className='pm mt-4 mb-4'>
            <div className='pm-container container'>
                <div className='row gx-3 mb-3'>
                    <div className='col-md-6'>
                        <label className=' mb-1' htmlFor='roleID'>
                            Lựa chọn hãng sản xuất
                        </label>
                        <Select
                            value={selectedBrand}
                            options={brands}
                            onChange={setSelectedBrand}
                        />
                    </div>
                    <div className='col-md-6'>
                        <button
                            className='btn btn-primary pm__add-new-product'
                            onClick={() =>
                                setToggleProductModal(!toggleProductModal)
                            }
                        >
                            <i className='far fa-newspaper'></i>
                            <span>Add New Product</span>
                        </button>
                    </div>
                </div>
                <div className='row gx-3 mb3'>
                    <div className='container'>
                        <ul className='responsive-table'>
                            <li className='table-header'>
                                {ths.map((item) => (
                                    <div
                                        className={item.className}
                                        key={item.id}
                                    >
                                        {item.title}
                                    </div>
                                ))}
                            </li>
                            {filterProducts?.length !== 0 &&
                                filterProducts.map((item) => {
                                    return (
                                        <li key={item.id} className='table-row'>
                                            {tds.map((item_td) => (
                                                <div
                                                    key={item_td.id}
                                                    className={
                                                        item_td.className
                                                    }
                                                >
                                                    {item[item_td.prop] ||
                                                        '$999'}
                                                </div>
                                            ))}
                                            <div className='col col-6 options'>
                                                <DropdownOption id={item.id} />
                                            </div>
                                        </li>
                                    );
                                })}
                        </ul>
                    </div>
                </div>
            </div>
            <Pagination />
            <ProductModal
                brands={brands}
                toggleProductModal={toggleProductModal}
                setToggleProductModal={setToggleProductModal}
                type={types.NEW}
            />
        </div>
    );
};

export default ProductManage;
