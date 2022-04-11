import { useEffect, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
    Row,
    Col,
} from 'reactstrap';
import Select from 'react-select';

const styled = {
    marginBottom: '20px',
};

const ProductModal = (props) => {
    // State
    const { toggleProductModal, setToggleProductModal, type, brands } = props;
    const [selectedBrand, setSelectedBrand] = useState(brands[0]);
    const [productName, setProductName] = useState('');
    const [imageLink, setImageLink] = useState('');
    const [cpu, set_CPU] = useState('');
    const [gpu, set_GPU] = useState('');
    const [origin, setOrigin] = useState('');
    const [productDate, setProductDate] = useState('');

    const handleGetData = () => {
        const data = {
            productName,
            image: imageLink,
            cpu,
            gpu,
            origin,
            productDate,
        };
        return data;
    };

    const verifyData = (data) => {
        return Object.keys(data).every((key) => data[key] !== '');
    };
    const handleSaveChangesData = () => {
        const data = handleGetData();
        console.log(verifyData(data));
        //        setToggleProductModal(!toggleProductModal);
    };

    // Call API
    useEffect(() => {
        setSelectedBrand(brands[0]);
    }, [brands]);
    return (
        <div className='pmo hellowordl'>
            <Modal
                size='lg'
                className='pmo'
                isOpen={toggleProductModal}
                centered
                toggle={() => setToggleProductModal(!toggleProductModal)}
            >
                <ModalHeader
                    toggle={() => setToggleProductModal(!toggleProductModal)}
                >
                    {`${type[0].toUpperCase() + type.slice(1)} Product`}
                </ModalHeader>
                <ModalBody>
                    <div className='pmo__form'>
                        <Row style={styled}>
                            <Col>
                                <FormGroup>
                                    <Label for='product_name'>
                                        Product Name
                                    </Label>
                                    <Input
                                        value={productName}
                                        id='product_name'
                                        placeholder='SamSung....'
                                        onChange={(e) =>
                                            setProductName(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for='image'>Image Link</Label>
                                    <Input
                                        id='image'
                                        value={imageLink}
                                        placeholder='Enter link image....'
                                        onChange={(e) =>
                                            setImageLink(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row style={styled}>
                            <Col sm='3'>
                                <FormGroup>
                                    <Label for='cpu'>CPU</Label>
                                    <Input
                                        id='cpu'
                                        placeholder='CPU...'
                                        value={cpu}
                                        onChange={(e) =>
                                            set_CPU(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col sm='3'>
                                <FormGroup>
                                    <Label for='gpu'>GPU</Label>
                                    <Input
                                        value={gpu}
                                        id='gpu'
                                        placeholder='GPU....'
                                        onChange={(e) =>
                                            set_GPU(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <Label>Brand</Label>
                                <Select
                                    options={brands}
                                    onChange={setSelectedBrand}
                                    value={selectedBrand}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for='origin'>Origin</Label>
                                    <Input
                                        id='origin'
                                        placeholder='with a placeholder'
                                        value={origin}
                                        onChange={(e) =>
                                            setOrigin(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for='product_date'>
                                        Product Date
                                    </Label>
                                    <Input
                                        id='product_date'
                                        placeholder='password placeholder'
                                        value={productDate}
                                        onChange={(e) =>
                                            setProductDate(e.target.value)
                                        }
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={handleSaveChangesData}>
                        Save Changes
                    </Button>
                    <Button
                        color='primary'
                        onClick={() =>
                            setToggleProductModal(!toggleProductModal)
                        }
                    >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default ProductModal;
