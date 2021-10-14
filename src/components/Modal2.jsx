import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../context/ModalContext";

const Modal2 = () => {
  const { modal, showModal, hideModal } = useContext(ModalContext);

  return (
    <div className="modal-item">
      <Button variant="primary" onClick={() => showModal(2)}>
        Open Modal 2
      </Button>

      <Modal show={modal === 2} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 2</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Content 2</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={hideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Modal2;
