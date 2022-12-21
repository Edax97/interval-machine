import React, { useEffect, useState } from "react";
import { ModalContainer } from "../modal-container/ModalContainer";

interface PropsType {
  title: string;
  editLabel: string;
  initialName: string;
  onSave: (name: string) => void;
  children: JSX.Element;
}

export function ModalEdit(props: PropsType) {
  const [closeSignal, triggerClose] = useState(false);

  const [name, setName] = useState("");
  useEffect(() => {
    setName(props.initialName);
  }, [props.initialName]);
  const onNameChange = (event: any) => {
    setName(event.target.value);
  };
  const onEdit = () => {
    if (name.length > 0) {
      triggerClose(!closeSignal);
      props.onSave(name);
    }
  };

  return (
    <ModalContainer
      title={props.title}
      trigger={props.children}
      close={closeSignal}
    >
      <div className="form-floating">
        <input
          className="form-control"
          id="set-name"
          type="text"
          placeholder={props.editLabel}
          value={name}
          onChange={onNameChange}
        />
        <label htmlFor="set-name">{props.editLabel}</label>
      </div>
      <div className="flex mt-3 text-center">
        <button
          className="btn btn-secondary"
          onClick={() => triggerClose(!closeSignal)}
        >
          CANCEL
        </button>
        <button className="ms-3 btn btn-warning" onClick={onEdit}>
          SAVE
        </button>
      </div>
    </ModalContainer>
  );
}
