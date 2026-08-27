// import styles from './ModalDemo.module.scss'

import { useState } from "react";
import Modal from "../../components/Modal";

function ModalDemo() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsModalOpen(true)}>Open modal</button>
            <Modal
                isOpen={isModalOpen}
                onAfterOpen={() => console.log("Modal đã mở")}
                onAfterClose={() => console.log("Modal đã đóng")}
                onRequestClose={() => setIsModalOpen(false)}
                closeTimeoutMS={300}
                overlayClassName="custom-overlay"
                className="custom-modal"
                bodyOpenClassName="modal-open"
                htmlOpenClassName="modal-open"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
                <button onClick={() => setIsModalOpen(false)}>Đóng</button>
            </Modal>
        </>
    );
}

export default ModalDemo;
