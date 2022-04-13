import { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import OptionForm from './OptionForm';
import CommonUtils from '../../../utils/CommonUtils';

const OptionModal = (props) => {
    const { toggleModal, setToggleModal, productID } = props;
    const [option, setOption] = useState(() => ({
        productID,
        ram: '',
        rom: '',
        price: '',
        image: '',
        colorID: '',
    }));

    const handleSubmitOption = () => {
        console.log(option);
    };

    return (
        <MDBModal show={toggleModal} tabIndex='-1'>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>New Option</MDBModalTitle>
                        <MDBBtn
                            className='btn-close'
                            color='none'
                            onClick={() => setToggleModal(!toggleModal)}
                        ></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                        <OptionForm option={option} setOption={setOption} />
                    </MDBModalBody>

                    <MDBModalFooter>
                        <MDBBtn
                            color='secondary'
                            onClick={() => setToggleModal(!toggleModal)}
                        >
                            Close
                        </MDBBtn>
                        <MDBBtn onClick={handleSubmitOption}>
                            Save changes
                        </MDBBtn>
                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    );
};

export default OptionModal;
