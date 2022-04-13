import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Row } from 'reactstrap';

//import Pagination from '../../components/Customs/Pagination';
import ProductList from '../../components/System/Product/ProductList';
import ProductModal from '../../components/System/Product/ProductModal';
import allcodeService from '../../services/allcodesService';
import productService from '../../services/productService';
import CommonUtils from '../../utils/CommonUtils';
import { types, keyMaps } from '../../utils/constant';

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
                <Row>
                    <h2 className='text-center fw-bold text-uppercase'>
                        Product Manage
                    </h2>
                </Row>
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
                    <ProductList filterProducts={filterProducts} />
                </div>
            </div>
            {/* <Pagination /> */}
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
