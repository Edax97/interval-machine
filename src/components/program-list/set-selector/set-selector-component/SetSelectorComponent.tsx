import React, { useMemo } from "react";
import { MdOutlineDeleteForever, MdOutlineEdit } from "react-icons/md";
import { ProgramSetType } from "../../../../types/program-list/program-set.type";
import { ModalDelete } from "../../../common/modal/modal-delete/ModalDelete";
import { ModalEdit } from "../../../common/modal/modal-edit/ModalEditt";

interface PropsType {
  currentSetId: number | null;
  setList: ProgramSetType[];
  selectSet: (setId: number) => void;
  hideDelete?: boolean;
  //onDelete, onCreate, onEdit
  onDelete?: () => void;
  onCreate?: (setName: string) => void;
  onEdit?: (setName: string) => void;
}

export function SetSelectorComponent(props: PropsType) {
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
        {!props.hideDelete && props.onDelete && props.onEdit && (
          <span className="d-flex gap-3">
            <ModalEdit
              title="Edit Group"
              editLabel="Group name"
              initialName={currentSetName}
              onSave={props.onEdit}
            >
              <MdOutlineEdit className="fs-4" />
            </ModalEdit>

            <ModalDelete
              title="Delete Group"
              message={`Do you want to delete ${currentSetName}?`}
              onDelete={props.onDelete}
            >
              <MdOutlineDeleteForever className={"fs-4 text-danger"} />
            </ModalDelete>
          </span>
        )}

        <button
          className="btn btn-lg dropdown-toggle ms-2"
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
          {!props.hideDelete && props.onCreate && (
            <li>
              <ModalEdit
                title="Create Group"
                editLabel="Group name"
                initialName=""
                onSave={props.onCreate}
              >
                <div className="dropdown-item text-success">New group</div>
              </ModalEdit>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

/*
 <div>
              
 */
