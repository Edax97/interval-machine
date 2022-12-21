import React, { useMemo } from "react";
import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { ProgramSetType } from "../../../../types/program-list/program-set.type";
import { ModalDelete } from "../../../common/modal/modal-delete/ModalDelete";

interface PropsType {
  currentSetId: number | null;
  setList: ProgramSetType[];
  selectSet: (setId: number) => void;
  hideDelete?: boolean;
  //onDelete, onCreate, onEdit
  onDelete?: () => void;
  onCreate?: () => void;
  onEdit?: () => void;
}

export function SetSelectorComponent(props: PropsType) {
  const hideClass = useMemo(
    () => (props.hideDelete ? "d-none" : ""),
    [props.hideDelete]
  );

  const currentSetName = useMemo(
    () =>
      props.setList.find((set) => set.id === props.currentSetId)?.setName || "",
    [props.currentSetId, props.setList]
  );

  return (
    <div>
      <div className="dropdown d-flex align-items-center justify-content-center">
        <span className="badge bg-opacity-75 bg-dark me-2">Group</span>
        <span className="me-5 fs-6 fw-bold">{currentSetName}</span>
        {!props.hideDelete && (
          <>
            <MdOutlineEdit
              className="fs-4 ms-2"
              role="button"
              aria-label="Edit group name"
              onClick={props.onEdit}
            />

            <ModalDelete
              modalTitle="Delete Group"
              modalMessage={`Do you want to delete ${currentSetName}`}
              onDelete={props.onDelete}
            >
              <MdOutlineDeleteForever className={"fs-4 text-danger"} />
            </ModalDelete>
          </>
        )}

        <button
          className="btn dropdown-toggle ms-2"
          id="select-expand"
          data-bs-toggle="dropdown"
          aria-label="Select program set"
          aria-expanded="false"
        ></button>

        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="select-expand"
        >
          {props.setList.map((set) => (
            <li key={set.id}>
              <button
                className="dropdown-item"
                onClick={() => props.selectSet(set.id)}
              >
                {set.setName}
              </button>
            </li>
          ))}
          <li className={hideClass}>
            <button
              className="dropdown-item text-success"
              onClick={props.onCreate}
            >
              New group
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

/*
 <div>
              
 */
