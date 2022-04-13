import { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

import OptionList from '../../components/System/Option/OptionList';
import OptionModal from '../../components/System/Option/OptionModal';
import { withRouter } from 'react-router';
import { Row } from 'reactstrap';

const OptionsProduct = (props) => {
    const [toggleModal, setToggleModal] = useState(false);
    const { history, match } = props;

    const handleRedirectProductManage = () => {
        history?.push && history.push('/system/product-manage');
    };

    return (
        <div className='op mt-4'>
            <div className='op__container container'>
                <Row>
                    <h2 className='text-center fw-bold text-uppercase'>
                        Product option
                    </h2>
                </Row>
                <div className='op__add-new mb-3'>
                    <MDBBtn
                        onClick={() => setToggleModal(!toggleModal)}
                        style={{ padding: '0px 20px', marginLeft: 'auto' }}
                        className='d-flex align-items-center gap-2 '
                    >
                        <i className='fas fa-plus'></i>
                        <span>Create Option</span>
                    </MDBBtn>
                </div>
                <div className='op__table'>
                    <OptionList />
                </div>
                <div className='op__back'>
                    <MDBBtn
                        onClick={handleRedirectProductManage}
                        style={{ padding: '0px 20px' }}
                        className='d-flex align-items-center gap-2'
                    >
                        <i className='fas fa-arrow-left'></i>
                        <span>Back Product Manage</span>
                    </MDBBtn>
                </div>
                <OptionModal
                    toggleModal={toggleModal}
                    setToggleModal={setToggleModal}
                    productID={match?.params?.id ? match.params.id : -1}
                />
            </div>
        </div>
    );
};

export default withRouter(OptionsProduct);
