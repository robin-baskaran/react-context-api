import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../context/ModalContext";

const Modal1 = () => {
  const { modal, showModal, hideModal } = useContext(ModalContext);

  return (
    <div className="modal-item">
      <Button variant="primary" onClick={() => showModal(1)}>
        Open Modal
      </Button>

      <Modal show={modal === 1} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Content 1</Modal.Body>
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

export default Modal1;
