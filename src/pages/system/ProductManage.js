import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Button, Col, Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';

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

    const handleGetProducts = async (page, per_page) => {
        const data = await CommonUtils.handleGetProductsPagination(
            page,
            per_page
        );
        setProducts(data);
    };
    useEffect(() => {
        handleGetAllcodeByType(keyMaps.BRAND);
        handleGetProducts(1, 4);
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
                <Row className='gx-3 mb-3'>
                    <Col className='col-md-6'>
                        <label className=' mb-1' htmlFor='roleID'>
                            Lựa chọn hãng sản xuất
                        </label>
                        <Select
                            value={selectedBrand}
                            options={brands}
                            onChange={setSelectedBrand}
                        />
                    </Col>
                    <Col className='col-md-6'>
                        <Button
                            className='btn btn-wraning pm__add-new-product'
                            onClick={() =>
                                setToggleProductModal(!toggleProductModal)
                            }
                        >
                            <i className='far fa-newspaper'></i>
                            <span>Add New Product</span>
                        </Button>
                    </Col>
                </Row>
                <Row className='row gx-3 mb3'>
                    <ProductList products={filterProducts} />
                </Row>
            </div>
            {/* <Pagination /> */}
            <ReactPaginate
                previousLabel={'<<'}
                nextLabel={'>>'}
                breakLabel={'...'}
                pageCount={7}
                marginPagesDisplayed={2}
                containerClassName={'pagination justify-content-center'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                previousLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
                onPageChange={({ selected }) =>
                    handleGetProducts(selected + 1, 4)
                }
            />
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
