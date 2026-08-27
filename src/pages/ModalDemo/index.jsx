import styles from "./ModalDemo.module.scss";

import { useState } from "react";
import Modal from "../../components/Modal";

function ModalDemo() {
    const [activeModal, setActiveModal] = useState(false);

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <button
                className={styles.btn}
                onClick={() => setActiveModal("basic")}
            >
                Basic Modal
            </button>
            <button
                className={styles.btn}
                onClick={() => setActiveModal("animation")}
            >
                Animation Modal
            </button>
            <button
                className={styles.btn}
                onClick={() => setActiveModal("advanced")}
            >
                Advanced Modal
            </button>
            <Modal isOpen={activeModal === "basic"} onRequestClose={closeModal}>
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
                <button onClick={closeModal}>Đóng</button>
            </Modal>

            <Modal
                isOpen={activeModal === "animation"}
                onRequestClose={closeModal}
                closeTimeoutMS={300}
            >
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
            </Modal>
            
            <Modal
                isOpen={activeModal === "advanced"}
                onAfterOpen={() => console.log("Modal đã mở")}
                onAfterClose={() => console.log("Modal đã đóng")}
                onRequestClose={closeModal}
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
            </Modal>
        </>
    );
}

export default ModalDemo;
