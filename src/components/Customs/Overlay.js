import { Modal, ModalBody } from "reactstrap";

import Loading from "./Loading";

const Overlay = (props) => {
    const { isOpenModal, handleToggleModal } = props;

    return (
        <Modal
            className="overlay__wrapper"
            isOpen={isOpenModal}
            toggle={handleToggleModal}
        >
            <ModalBody className="overlay__content">
                <Loading type="spinningBubbles" color="#fff" />
            </ModalBody>
        </Modal>
    );
};

export default Overlay;
