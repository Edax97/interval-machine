import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const styleModal = {
  content: {
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginTop: "3rem",
    transform: "translate(-50%, 0)",
  },
};

interface PropsType {
  modalTitle: string;
  modalMessage: string;
  onDelete?: () => void;
  children: JSX.Element;
}
export function ModalDelete(props: PropsType) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const onDelete = () => {
    closeModal();
    if (props.onDelete) props.onDelete();
  };
  return (
    <>
      <div
        role="button"
        aria-label={props.modalTitle}
        onClick={() => setOpen((o) => !o)}
      >
        {props.children}
      </div>
      <Modal isOpen={open} style={styleModal} onRequestClose={closeModal}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">{props.modalTitle}</div>
          </div>
          <div className="modal-body">
            <div>{props.modalMessage}</div>
            <div className="flex mt-3">
              <button className="btn btn-secondary" onClick={closeModal}>
                CANCEL
              </button>
              <button className="ms-2 btn btn-danger" onClick={onDelete}>
                DELETE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

/*

*/
