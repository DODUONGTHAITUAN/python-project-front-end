import { useState } from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { MDBBtn } from 'mdb-react-ui-kit';

const OptionsProduct = (props) => {
    const { match } = props;
    console.log(match);
    const [options, setOptions] = useState(() => ({
        ram: '',
        rom: '',
        price: '',
        image: '',
        colorID: '',
    }));
    return (
        <div className='op'>
            <div className='op__container container'>
                <Row className='mt-3'>
                    <Col>
                        <FormGroup>
                            <Label></Label>
                        </FormGroup>
                    </Col>
                    <Col>Hello world</Col>
                </Row>
            </div>
        </div>
    );
};

export default OptionsProduct;
