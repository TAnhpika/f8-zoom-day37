import { useRef, useState } from "react";
import Modal from "@/components/Modal";

function ModalDemo() {
    const [activeModal, setActiveModal] = useState(false);

    const modalRef = useRef(null);

    const openImperativeModal = () => {
        modalRef.current?.open();
    };
    const closeImperativeModal = () => {
        modalRef.current?.close();
    };
    const toggleImperativeModal = () => {
        modalRef.current?.toggle();
    };
    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <>
            <button onClick={() => setActiveModal("basic")}>Basic Modal</button>

            <button onClick={() => setActiveModal("animation")}>
                Animation Modal
            </button>

            <button onClick={() => setActiveModal("x-close")}>
                X close Modal
            </button>

            <button onClick={() => setActiveModal("class-custom")}>
                Custom className Modal
            </button>

            <button onClick={() => setActiveModal("callback")}>
                Callback Modal
            </button>

            <button onClick={() => setActiveModal("advanced")}>
                Advanced Modal
            </button>

            <button onClick={openImperativeModal}>Imperative Modal</button>

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
                isOpen={activeModal === "x-close"}
                onRequestClose={closeModal}
                shouldCloseOnEsc={false}
                shouldCloseOnOverlayClick={false}
            >
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
            </Modal>

            <Modal
                isOpen={activeModal === "class-custom"}
                onRequestClose={closeModal}
                className={"a"}
                overlayClassName={"b"}
                bodyOpenClassName="c"
                htmlOpenClassName="d"
            >
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
            </Modal>

            <Modal
                isOpen={activeModal === "callback"}
                onRequestClose={closeModal}
                onAfterOpen={() => console.log("Modal đã mở")}
                onAfterClose={() => console.log("Modal đã đóng")}
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

            <Modal
                ref={modalRef}
                isOpen={false}
                onRequestClose={closeImperativeModal}
            >
                <h2>Modal Content</h2>
                <p>Đây là nội dung modal</p>
                <button onClick={toggleImperativeModal}>Toggle</button>
            </Modal>
        </>
    );
}

export default ModalDemo;
