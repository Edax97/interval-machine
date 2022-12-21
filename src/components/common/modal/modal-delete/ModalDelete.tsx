import React, { useState } from "react";
import { ModalContainer } from "../modal-container/ModalContainer";

interface PropsType {
  title: string;
  message: string;
  onDelete?: () => void;
  children: JSX.Element;
}
export function ModalDelete(props: PropsType) {
  const [close, setClose] = useState(false);

  const onDelete = () => {
    setClose(!close);
    if (props.onDelete) props.onDelete();
  };
  return (
    <ModalContainer title={props.title} trigger={props.children} close={close}>
      <div>
        <div>{props.message}</div>
        <div className="flex mt-3 text-center">
          <button
            className="btn btn-secondary"
            onClick={() => setClose(!close)}
          >
            CANCEL
          </button>
          <button className="ms-3 btn btn-danger" onClick={onDelete}>
            DELETE
          </button>
        </div>
      </div>
    </ModalContainer>
  );
}

/*

*/
