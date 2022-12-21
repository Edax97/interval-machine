import React, { ReactNode, useEffect, useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const styleModal = {
  content: {
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginTop: "3rem",
    minWidth: "280px",
    transform: "translate(-50%, 0)",
  },
};

interface PropsType {
  trigger: ReactNode;
  title: string;
  children: ReactNode;
  close: boolean;
}

export function ModalContainer(props: PropsType) {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    closeModal();
  }, [props.close]);

  return (
    <>
      <div
        role="button"
        aria-label={props.title}
        onClick={() => setOpen((o) => !o)}
      >
        {props.trigger}
      </div>
      <Modal isOpen={open} style={styleModal} onRequestClose={closeModal}>
        <div className="fs-5 fw-bold">{props.title}</div>
        <hr className="mt-2" />
        {props.children}
      </Modal>
    </>
  );
}
